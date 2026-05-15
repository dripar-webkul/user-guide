# Installation

UnoPim v2.1.0 supports three install paths. Pick the one that matches your environment:

| Path | When to use it | Page |
|---|---|---|
| **Docker (recommended)** | Production deployments, evaluation, CI. No PHP/Composer/Node tooling required on the host. | [Docker Setup](./docker) |
| **GUI Installer** | First-time evaluation on a server where PHP and Composer are already available. Browser-based wizard. | (covered during normal install) |
| **CLI Installer** | Scripted installs, automation, CI pipelines. | (`php artisan unopim:install` — covered during normal install) |

After install, you can optionally seed sample products, categories, and attributes to evaluate UnoPim with realistic data — see [Demo Data Seeding](./demo-data).

## What changed in v2.1.0

| Feature | Notes |
|---|---|
| **Production-Ready Docker stack** | Nginx + PHP-FPM by default with Apache fallback; pre-built images on Docker Hub; healthchecks; supervised queue worker and scheduler. → [Docker Setup](./docker) |
| **Demo Data Seeding** | New `--with-demo-data` installer flag, installer wizard checkbox, and standalone `unopim:install:demo-data` command. Idempotent — re-running won't double-seed unless you pass `--force`. → [Demo Data](./demo-data) |
| **`DB_PREFIX` hardening** | Installer command and controller now trim, reject internal whitespace, and clear stale prefix values. Migrations no longer hardcode `wk_` — they rely on Laravel's prefix configuration. |
| **PostgreSQL + MySQL parity** | Driver-gated bulk-mode session vars; new PostgreSQL CI workflow runs every change against PostgreSQL 16. |
