-- Run in Supabase SQL editor or via supabase db push after linking the project.
-- Table for /request-demo form submissions (replaces Base44 DemoRequest entity).

create table if not exists public.demo_requests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  work_email text not null,
  company text not null,
  job_title text,
  company_size text,
  exploring text,
  message text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

comment on table public.demo_requests is 'Marketing site demo request submissions';

alter table public.demo_requests enable row level security;

-- Allow anonymous visitors to submit (browser uses anon key).
create policy "demo_requests_insert_anon"
  on public.demo_requests
  for insert
  to anon
  with check (true);

-- Optional: authenticated service role / dashboard reads bypass RLS.
-- Anonymous clients cannot read rows unless you add a select policy.
