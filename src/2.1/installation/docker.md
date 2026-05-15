# Docker Setup *(v2.1.0)*

UnoPim v2.1.0 ships a **production-ready Docker stack** that brings up the full platform — application server, queue worker, scheduler, database, cache, search, and email testing — with a single command. No PHP, Composer, or Node tooling required on the host.

## What's in the stack

The default `docker-compose.yml` runs **eight containers**:

| Container | Purpose | Image |
|---|---|---|
| `unopim-nginx` | Reverse proxy — serves static files, forwards PHP to FPM | `nginx:1.27-alpine` |
| `unopim-fpm` | PHP 8.3 FPM application server | built from [dockerfiles/fpm.Dockerfile](dockerfiles/fpm.Dockerfile) |
| `unopim-q` | Queue worker — `webhooks`, `system`, `completeness`, `default` | built from [dockerfiles/q.Dockerfile](dockerfiles/q.Dockerfile) |
| `unopim-scheduler` | Laravel scheduler (replaces system cron) | same image as `unopim-q`, runs `schedule:work` |
| `unopim-mysql` | MySQL 8.0 database | `mysql:8.0.36-debian` |
| `unopim-redis` | Cache + queue backend | `redis:7.2-alpine` |
| `unopim-elasticsearch` | Product + category search | `elasticsearch:8.17.0` |
| `unopim-mailpit` | Local SMTP + email-testing UI | `axllent/mailpit:v1.21` |

::: tip Why Mailpit?
Mailpit catches every outgoing email and shows it in a web UI at `http://localhost:8025`. It means UnoPim can send password-reset, notification, and order-confirmation emails in your dev environment without touching the real internet. In production, point `MAIL_HOST` at your SMTP relay instead.
:::

## Three setup flavours

UnoPim ships three Docker Compose files. Pick the one that matches your goal:

| File | When to use | What it does |
|---|---|---|
| **`docker-compose.yml`** *(default)* | You have the UnoPim source checked out and want **Nginx + PHP-FPM** (the production-grade configuration). | Builds local images from `dockerfiles/`, mounts your working copy into the FPM container. |
| **`docker-compose.hub.yml`** | You don't have the source — you just want to **pull and run**. | Uses pre-built Docker Hub images (`webkul/unopim`, `webkul/unopim-queue`). Source lives in a named volume, not your filesystem. |
| **`docker-compose.apache.yml`** *(override)* | You prefer **Apache + mod_php** in a single container instead of Nginx + FPM. | Layered on top of `docker-compose.yml`; disables the Nginx and FPM services and starts `unopim-web` (Apache) in their place. |

### Quick start — Docker Hub images

The fastest path. No git clone needed:

```sh
# Grab the compose file and a starter .env
curl -O https://raw.githubusercontent.com/unopim/unopim/master/docker-compose.hub.yml
curl -O https://raw.githubusercontent.com/unopim/unopim/master/.env.docker
cp .env.docker .env

# Boot the stack
docker compose -f docker-compose.hub.yml up -d

# Wait ~90 seconds for first-time setup (DB migrations + ES indexing)
open http://localhost:8000/admin
```

### Quick start — building from source (recommended for development)

```sh
git clone https://github.com/unopim/unopim.git
cd unopim
cp .env.docker .env

docker compose up -d
# Wait ~90s, then open http://localhost:8000/admin
```

### Quick start — Apache instead of Nginx

```sh
docker compose -f docker-compose.yml -f docker-compose.apache.yml up -d
```

Or set this in your `.env` once and forget about the `-f` flags:

```
COMPOSE_FILE=docker-compose.yml:docker-compose.apache.yml
```

## Environment variables

The compose files read configuration from `.env` (copied from `.env.docker`). The most useful overrides:

### Public port

| Variable | Default | What it does |
|---|---|---|
| **`APP_PORT`** | `8000` | The host port that maps to Nginx/Apache port 80. Change this when port 8000 is already in use on your machine: `APP_PORT=9000` → admin at `http://localhost:9000/admin`. |

### Host-facing service ports (loopback only)

Each backing service is exposed on `127.0.0.1` so you can connect from local tools (MySQL Workbench, redis-cli, Kibana, etc.) without exposing it to the network:

| Variable | Default | Service |
|---|---|---|
| **`FORWARD_DB_PORT`** | `3306` | MySQL |
| **`FORWARD_REDIS_PORT`** | `6379` | Redis |
| **`FORWARD_ES_PORT`** | `9200` | Elasticsearch |
| **`FORWARD_MAILPIT_PORT`** | `8025` | Mailpit web UI |
| **`FORWARD_MAILPIT_SMTP_PORT`** | `1025` | Mailpit SMTP |

### Database credentials

| Variable | Default | Notes |
|---|---|---|
| `DB_ROOT_PASSWORD` | `password` | MySQL root password. **Change before production.** |
| `DB_DATABASE` | `unopim` | Database name created on first boot. |
| `DB_USERNAME` | `unopim` | App database user. |
| `DB_PASSWORD` | `password` | App database password. **Change before production.** |

### Elasticsearch disk watermarks

Elasticsearch refuses to write when disk usage crosses configurable thresholds. The Docker stack ships permissive defaults so dev machines with small disks still work:

| Variable | Default |
|---|---|
| `ELASTICSEARCH_DISK_WATERMARK_LOW` | `90%` |
| `ELASTICSEARCH_DISK_WATERMARK_HIGH` | `95%` |
| `ELASTICSEARCH_DISK_WATERMARK_FLOOD_STAGE` | `97%` |

### Optional: demo data on boot

| Variable | Default | Effect |
|---|---|---|
| `UNOPIM_SEED_DEMO_DATA` | (unset) | Set to `true` to run [`unopim:install:demo-data`](./demo-data) automatically after first-time migration. |

## How the queue worker container works

The `unopim-q` service runs `dockerfiles/q-entrypoint.sh`, which:

1. **Waits for the app server** to write the lock file `storage/unopim.lock` (signal that first-time setup finished) — times out after `SETUP_WAIT_TIMEOUT` seconds (default `300`).
2. **Reads `APP_KEY`** from the `.env` file that the FPM container generated on its first boot — ensures the worker uses the same key.
3. **Starts `queue:work`** as the `www-data` user with `--max-jobs` and `--max-time` flags so the worker auto-restarts before memory leaks build up.

Override its behaviour with these environment variables:

| Variable | Default | Effect |
|---|---|---|
| **`QUEUE_NAMES`** | `webhooks,system,completeness,default` | Comma-separated queue list passed to `queue:work --queue=`. Add or remove queues here to control which jobs this worker handles. |
| `QUEUE_TIMEOUT` | `90` | Per-job timeout in seconds. |
| `QUEUE_TRIES` | `3` | Worker-level retry count (applies on top of job-level `$tries`). |
| `QUEUE_MAX_JOBS` | `1000` | Restart the worker after this many jobs (memory safety). |
| `QUEUE_MAX_TIME` | `3600` | Restart the worker after this many seconds. |
| `SETUP_WAIT_TIMEOUT` | `300` | Fail fast if the FPM container hasn't created `storage/unopim.lock` after this many seconds. |

::: tip Run a dedicated webhooks worker
Want to isolate webhook delivery so a slow receiving endpoint can't slow `system` or `completeness` jobs? Duplicate the `unopim-q` service in your compose file, give the copy a different name (e.g. `unopim-q-webhooks`), and set `QUEUE_NAMES: "webhooks"` on it. Then strip `webhooks` out of the main worker's queue list.
:::

## Persisted data

Three named Docker volumes hold the state that survives `docker compose down`:

| Volume | Holds |
|---|---|
| `unopim-mysql-data` | The MySQL database |
| `unopim-redis-data` | Redis dump file |
| `unopim-elasticsearch-data` | Elasticsearch indices |

To completely wipe and restart (useful when iterating on schema changes), run `docker compose down -v` — the `-v` flag deletes the volumes.

## First-time setup behaviour

The first time you bring the stack up, the FPM container runs migrations, generates `APP_KEY`, and writes `storage/unopim.lock`. This takes roughly **60–90 seconds** depending on hardware. During this window:

- The admin URL returns a 502 from Nginx — wait it out.
- The queue worker container blocks (it's waiting for the lock file).
- The scheduler container blocks (same reason).

Once the lock file appears, all three containers transition to healthy.

::: warning Empty APP_KEY problem
If you see "No application encryption key has been specified" after boot, your FPM/queue/scheduler containers raced past the `.env` write. Restart them: `docker compose restart unopim-fpm unopim-q unopim-scheduler`. The `q-entrypoint.sh` now exports `APP_KEY` explicitly on every start, so this is rare in v2.1.0 — but the recovery is the same.
:::

## Where to go next

- Want sample products and categories? See [Demo Data Seeding](./demo-data) — the Docker stack reads `UNOPIM_SEED_DEMO_DATA` from `.env`.
- Need to drain the `webhooks` queue from outside Docker? See [Webhooks → Running the queue worker](../configuration/webhooks#running-the-queue-worker).
- Production deployment checklist: change every `*_PASSWORD` default, set `APP_DEBUG=false`, configure `APP_DEBUG_ALLOWED_IPS` if you still need debugbar, swap Mailpit for a real SMTP relay, and put TLS termination in front of `unopim-nginx`.
