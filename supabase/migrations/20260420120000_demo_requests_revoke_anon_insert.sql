-- Optional: run after demo submissions go only through /api/demo-requests (service role).
-- Prevents anyone with the anon key from inserting rows directly and bypassing Resend.

drop policy if exists "demo_requests_insert_anon" on public.demo_requests;
