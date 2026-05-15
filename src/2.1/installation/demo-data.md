# Demo Data Seeding *(v2.1.0)*

UnoPim v2.1.0 can populate a fresh install with realistic sample data — channels, attributes, families, categories, and products — so you can explore every feature without typing a single record. There are three ways to seed it:

## What "demo data" includes

The demo seeder runs three Laravel seeders back-to-back:

1. **`DemoExtrasTableSeeder`** — adds a non-default sales channel, extra attributes, a richer attribute family, and core configuration entries.
2. **`CategoryDemoTableSeeder`** — builds a multi-level category tree under the root category.
3. **`ProductTableSeeder`** — inserts sample simple **and** configurable products, complete with `super_attributes` linking variants to the `size` attribute.

After seeding finishes, the helper also:

- **Re-indexes Elasticsearch** (categories then products) if `ELASTICSEARCH_ENABLED=true`, so seeded data is searchable immediately.
- **Recalculates product completeness** synchronously (no queue worker needed) so completeness scores show correct values from the first page load.

::: tip Safety net
The seeder runs a sanity check at the end — if the **default** attribute family has zero attribute-group mappings (which would render the catalog unusable), seeding is marked failed rather than leaving you with a broken install.
:::

## Three ways to seed

### 1. From the GUI installer (recommended)

When you run the browser-based install wizard, the **"Seed sample products?"** checkbox on the final step seeds demo data as part of the install. Just tick the box, click **Install**, and the wizard will run the demo seeder right after the core schema migrations.

### 2. With the CLI installer

Pass the `--with-demo-data` flag to the install command:

```sh
php artisan unopim:install --with-demo-data
```

This is the right choice for **scripted installs** (provisioning, CI, Vagrant boxes). The flag does nothing if you omit it — the base installer always works without demo data.

### 3. After install — standalone command

If you've already installed UnoPim and want to add sample data to an existing database, run:

```sh
php artisan unopim:install:demo-data
```

This is also the command the Docker setup invokes when you set `UNOPIM_SEED_DEMO_DATA=true` in `.env`.

::: tip Output during seeding
The command prints a short status line for each step it runs — `"Step: Seeding demo extras..."`, `"Step: Seeding sample products..."`, etc. — so you can see progress in the terminal.
:::

## Idempotency — running it twice is safe

The seeder is **idempotent**. Running `unopim:install:demo-data` a second time on the same database does **not** double-seed:

```
$ php artisan unopim:install:demo-data
Demo data is already seeded — nothing to do. Re-run with --force to re-seed.
```

### How "already seeded" is detected

The helper probes the `categories` table for any category that has a non-null `parent_id`. Here's why that works:

- The **base UnoPim installer** only creates the root category (`parent_id = null`).
- The **demo category seeder** inserts a multi-level tree of child categories (each with `parent_id` pointing at its parent).

So the presence of even one child category is proof that the demo pipeline has already run. No demo data → no children → the seeder runs normally.

### `--force` — re-seed anyway

If you do want to re-run every seeder against a database that's already been seeded (e.g., you've manually deleted demo content and want it back, or you're testing the seeder itself), pass `--force`:

```sh
php artisan unopim:install:demo-data --force
```

::: warning
`--force` does **not** wipe existing data first. It re-runs the seeders on top of whatever's there, which can produce duplicate rows for unique-but-not-keyed attributes. Use it on disposable databases, not on production data you care about.
:::

## Workflow summary

| Situation | Command |
|---|---|
| First-time install, want demo data | `php artisan unopim:install --with-demo-data` |
| Already installed, want to add demo data | `php artisan unopim:install:demo-data` |
| Demo data already seeded, want to do nothing | (just run the command above — it will skip safely) |
| Demo data already seeded, want to re-run anyway | `php artisan unopim:install:demo-data --force` |
| Want to install **without** any sample data | `php artisan unopim:install` (no flag) |

## Where to go next

- After seeding, head to the [Dashboard](../dashboard/) — you should immediately see populated product stats, category counts, and a healthy completeness gauge.
- Want to remove demo data and start fresh? Drop and re-create the database, then run `php artisan unopim:install` without `--with-demo-data`.
- For containerised installs, see [Docker Setup](./docker) — the Docker stack honours the `UNOPIM_SEED_DEMO_DATA` environment variable and calls `unopim:install:demo-data` for you.
