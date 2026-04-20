# Auzaar site

Vite + React marketing site. Demo requests are stored in **Supabase** (`demo_requests` table).

## Local development

```bash
npm install
cp .env.example .env.local
# Fill VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY, then:
npm run dev
```

Apply the SQL in `supabase/migrations/` in the Supabase SQL editor (or use the Supabase CLI) before testing the request form.

**Brand:** Replace `public/brand/auzaar-logo.svg` with your official lockup (or point `LOGO_SRC` in `src/components/site/WordMark.jsx` at a PNG in the same folder).

## Deploy (Vercel)

1. Import the repo in [Vercel](https://vercel.com).
2. Framework preset: **Vite**. Build command: `npm run build`, output: `dist`.
3. Add environment variables: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` (same values as in Supabase Project Settings → API).

`vercel.json` includes SPA rewrites so client-side routes work on refresh.
