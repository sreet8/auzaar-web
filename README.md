# Auzaar site

Vite + React marketing site. Demo requests are saved in **Supabase** (`demo_requests`) and a confirmation email is sent with **Resend** via a **Vercel serverless** route (`/api/demo-requests`).

## Supabase

1. Run `supabase/migrations/20260420000000_demo_requests.sql` in the Supabase SQL editor.
2. Optional hardening: add **`SUPABASE_SERVICE_ROLE_KEY`** in Vercel, switch the API to use it (it is preferred automatically when set), then run `20260420120000_demo_requests_revoke_anon_insert.sql` so rows cannot be inserted with the anon key alone.

## Local development

**Option A — full stack (recommended for testing the form + email)**

```bash
npm install
cp .env.example .env.local
# Fill at least VITE_SUPABASE_*, RESEND_*, then:
npx vercel dev
```

**Option B — Vite only (`npm run dev`)**

The demo form calls `/api/demo-requests` on the same origin. Plain Vite does not run that API locally. Either:

- run **`npm run dev:vercel`** (uses `npx vercel dev`), or  
- set **`VITE_PUBLIC_API_ORIGIN`** in `.env.local` to a deployed preview (e.g. `https://your-app.vercel.app`) so the browser posts to production’s API while you work on the UI.

## Vercel environment variables

You already have **`RESEND_API_KEY`**, **`VITE_SUPABASE_URL`**, and **`VITE_SUPABASE_ANON_KEY`**. On Vercel, those `VITE_*` values are also available to **`/api/demo-requests`**, so the serverless route can insert using the anon key as long as your migration allows **anon INSERT** on `demo_requests`.

Add this if it is not set yet:

| Variable | Purpose |
|----------|---------|
| **`RESEND_FROM`** | **Required to send mail.** Verified sender in Resend, e.g. `Auzaar <hello@mail.yourdomain.com>` |

Optional:

| Variable | Purpose |
|----------|---------|
| `RESEND_REPLY_TO` | Inbox for replies from the lead |
| `SUPABASE_SERVICE_ROLE_KEY` | Prefer over anon for inserts; then revoke anon INSERT (see migration `20260420120000_*`) |
| `SUPABASE_URL` | Optional duplicate of project URL if you do not want to rely on `VITE_SUPABASE_URL` in server-only contexts |

Build: **Vite**, output directory **`dist`**.

**Brand:** Replace `public/brand/auzaar-logo.svg` with your official lockup (or change `LOGO_SRC` in `src/components/site/WordMark.jsx`).

`vercel.json` rewrites non-`/api/*` paths to `index.html` for client-side routing.
