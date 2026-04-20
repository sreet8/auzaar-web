import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const TABLE = 'demo_requests'

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildConfirmationEmail({ full_name, company }) {
  const name = escapeHtml(full_name)
  const co = company ? escapeHtml(company) : ''
  const subject = 'We received your Auzaar demo request'
  const html = `<!DOCTYPE html>
<html>
<body style="font-family:system-ui,-apple-system,sans-serif;line-height:1.6;color:#0f172a;max-width:560px">
  <p>Hi ${name},</p>
  <p>Thanks for requesting a demo with Auzaar Networks. We have received your submission${
    co ? ` for <strong>${co}</strong>` : ''
  }.</p>
  <p>A member of our team will reach out within one business day to schedule your walkthrough.</p>
  <p>If you did not submit this request, you can ignore this email.</p>
  <p style="margin-top:2rem;color:#64748b;font-size:13px">Auzaar Networks</p>
</body>
</html>`
  const text = [
    `Hi ${full_name},`,
    '',
    `Thanks for requesting a demo with Auzaar Networks. We have received your submission${company ? ` for ${company}.` : '.'}`,
    '',
    'A member of our team will reach out within one business day to schedule your walkthrough.',
    '',
    'If you did not submit this request, you can ignore this email.',
    '',
    '— Auzaar Networks',
  ].join('\n')
  return { subject, html, text }
}

function isValidEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s))
}

/** Vercel Node serverless: POST JSON body, returns JSON. */
export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json')

  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const supabaseUrl =
    process.env.SUPABASE_URL ||
    process.env.VITE_SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const anonKey =
    process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY
  const supabaseKey = serviceKey || anonKey

  const resendKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM

  if (!supabaseUrl || !supabaseKey) {
    return res.status(503).json({
      error:
        'Supabase is not configured for the API. Set VITE_SUPABASE_URL (or SUPABASE_URL) and either SUPABASE_SERVICE_ROLE_KEY or VITE_SUPABASE_ANON_KEY.',
    })
  }
  if (!serviceKey && anonKey) {
    console.warn(
      '[demo-requests] Using the Supabase anon key on the server. Prefer SUPABASE_SERVICE_ROLE_KEY and revoke anon INSERT on demo_requests when you can.'
    )
  }
  if (!resendKey) {
    return res.status(503).json({ error: 'RESEND_API_KEY is not set.' })
  }
  if (!from) {
    return res.status(503).json({
      error:
        'RESEND_FROM is not set. Add a verified sender in Vercel (e.g. Auzaar <hello@mail.yourdomain.com>).',
    })
  }

  const body = typeof req.body === 'object' && req.body !== null ? req.body : {}
  const full_name = String(body.full_name ?? '').trim()
  const work_email = String(body.work_email ?? '').trim()
  const company = String(body.company ?? '').trim()
  const job_title = body.job_title ? String(body.job_title).trim() : null
  const company_size = body.company_size ? String(body.company_size).trim() : null
  const exploring = body.exploring ? String(body.exploring).trim() : null
  const message = body.message ? String(body.message).trim() : null

  if (!full_name || !work_email || !company) {
    return res.status(400).json({ error: 'Missing required fields: full_name, work_email, company.' })
  }
  if (!isValidEmail(work_email)) {
    return res.status(400).json({ error: 'Invalid work email address.' })
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })

  const payload = {
    full_name,
    work_email,
    company,
    job_title,
    company_size,
    exploring,
    message,
    status: 'new',
  }

  const { error: insertError } = await supabase.from(TABLE).insert(payload)

  if (insertError) {
    console.error('demo_requests insert:', insertError)
    return res.status(500).json({ error: insertError.message || 'Could not save your request.' })
  }

  const resend = new Resend(resendKey)
  const { subject, html, text } = buildConfirmationEmail({ full_name, company })

  const replyTo = process.env.RESEND_REPLY_TO

  const emailResult = await resend.emails.send({
    from,
    to: [work_email],
    subject,
    html,
    text,
    ...(replyTo ? { replyTo: [replyTo] } : {}),
  })

  if (emailResult.error) {
    console.error('Resend:', emailResult.error)
    // Row is saved; still return success so the visitor is not blocked.
    return res.status(201).json({ ok: true, emailSent: false })
  }

  return res.status(201).json({ ok: true, emailSent: true })
}
