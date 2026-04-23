# Job Tracker

> **Sidebar:** Data Transfer → **Job Tracker**
> **URL:** `/admin/data-transfer/job-tracker`

The **Job Tracker** is the central monitoring page for every import and export job UnoPim runs. When you click *Import Now* or *Export Now* from a profile, or watch a background job fire off, this is the screen that shows you what's happening right now, what's finished, and what — if anything — went wrong.

## What is the Job Tracker?

A single real-time view of every data-transfer job in the system. Instead of hunting through import and export listings separately, you open one page and see:

- **Every job's status** — queued, processing, complete, failed, cancelled, paused.
- **Live progress** — current step in the pipeline, count of records created / updated / deleted so far.
- **Controls** — pause, resume, or cancel an in-flight job.
- **Logs and artefacts** — download the job log or the exported file once the run finishes.

<ImagePopup src="/assets/2.0/images/data-transfer/tracker.png" alt="Job Tracker" />

## How does it work?

Every import and export runs as a queued job. The moment you launch one, UnoPim:

1. Creates a **job record** with a unique ID, status `Queued`, and the configuration that was submitted.
2. As the queue worker picks it up, the job moves through a fixed **step pipeline** — each step updates the record.
3. The Job Tracker page subscribes to those updates and repaints the progress UI live (no refresh needed).
4. When the job lands in a terminal state (`Complete`, `Failed`, `Cancelled`), the log file and any produced artefacts become downloadable from the tracker.

Because every step writes to the same record, you can navigate away from the tracker mid-run and come back later — the page restores the current state from the database.

## Job statuses

| Status | Meaning |
|---|---|
| **Queued** | Job is in the queue, waiting for a worker. |
| **Processing** | A worker has picked it up and the pipeline is advancing. |
| **Paused** | You stopped it mid-run; state is preserved and it can be resumed. |
| **Complete** | All steps finished successfully. |
| **Failed** | A step errored; see the log for details. |
| **Cancelled** | You stopped it permanently; cannot be resumed. |

## Step pipelines

The tracker visualises each job as a horizontal pipeline. The exact steps depend on the job type:

### Import pipeline

| Step | Description |
|------|-------------|
| **Queued** | Job is waiting for a worker. |
| **Validating** | File is being validated against the import rules. |
| **Importing** | Records are being created / updated / deleted in the database. |
| **Indexing** | Elasticsearch indexes are being updated so products are searchable. |
| **Complete** | Import finished successfully. |

<ImagePopup src="/assets/2.0/images/data-transfer/import-progress.png" alt="Import Progress" />

### Export pipeline

| Step | Description |
|------|-------------|
| **Queued** | Job is waiting for a worker. |
| **Validating** | Export configuration is being validated. |
| **Exporting** | Records are being written to the output file. |
| **Complete** | Export finished successfully. |

<ImagePopup src="/assets/2.0/images/data-transfer/export-progress.png" alt="Export Progress" />

Each completed step renders with a green checkmark. A failed step renders red and the pipeline stops there — subsequent steps are skipped.

## Details shown for each job

Below the pipeline, the tracker shows:

- **Success / Error message** — *"Job completed successfully"* plus total duration, or the specific error that stopped the run (e.g., *"Required columns not found: code"*).
- **Records Created / Updated / Deleted** — exact counts of what changed.
- **Total Duration** — how long the job took from queued to terminal state.
- **Download log** — full import/export log for offline review.
- **Download Exported Files** *(exports only)* — the CSV/XLS/XLSX produced by the run.

## Controls

### Pause

During a `Processing` run, click **Pause** to temporarily halt the job. UnoPim freezes the job state at the current batch — no records are lost, nothing rolls back, and the queue worker moves on to other work.

### Resume

For a `Paused` job, click **Resume** to continue from the next batch. The job picks up exactly where it left off — already-processed records are not reprocessed.

### Cancel

Click **Cancel** to stop a job permanently. The job moves to the `Cancelled` state and cannot be resumed. Records already written by earlier steps are **not** rolled back — if you need to undo them, run a cleanup import.

::: tip
Pause is the right choice during peak hours on a large job. Cancel is for *"this import had the wrong file"* situations — once you cancel, you start over from the listing page.
:::

## Opening the Job Tracker

Three common entry points:

1. **From the admin sidebar** — click **Data Transfer → Job Tracker**.
2. **After launching a job** — the *Import Now* / *Export Now* button redirects you straight to the tracker for the job you just started.
3. **From the Dashboard** — the **Data Transfer** widget lists recent jobs and a *"View All Jobs"* link goes to the tracker.

## How the tracker relates to imports and exports

| Page | Role |
|---|---|
| **[Import](./import.md)** | Define an import profile (code, type, file, validation strategy, action mode). |
| **[Export](./export.md)** | Define an export profile (code, type, file format, media). |
| **Job Tracker** (this page) | Monitor the runs those profiles produce — status, progress, logs, artefacts. |

Profiles are *reusable configurations*. Every time you hit *Import Now* or *Export Now* on a profile, a new job is created and surfaced in the Job Tracker.

## Background processing

Jobs run on the Laravel queue worker. If you don't see queued jobs progressing, make sure a worker is running:

```bash
php artisan queue:listen
```

For production, run the worker as a managed service (systemd, Supervisor, …) so it stays up across reboots.
