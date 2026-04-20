/**
 * @param {Record<string, unknown>} row
 * @returns {Promise<{ error: Error | null }>}
 */
export async function createDemoRequest(row) {
  const path = '/api/demo-requests'
  const origin = import.meta.env.VITE_PUBLIC_API_ORIGIN
  const url = origin ? `${String(origin).replace(/\/$/, '')}${path}` : path

  let res
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(row),
    })
  } catch (e) {
    const err = e instanceof Error ? e : new Error(String(e))
    return {
      error: new Error(
        `Could not reach demo API (${url}). For local email tests run "npm run dev:vercel", or set VITE_PUBLIC_API_ORIGIN to your deployed site. ${err.message}`
      ),
    }
  }

  const raw = await res.text()
  const trimmed = raw.trim()
  const looksLikeHtml =
    trimmed.startsWith('<!') ||
    trimmed.toLowerCase().startsWith('<html') ||
    trimmed.startsWith('<head')

  let data = {}
  if (trimmed) {
    try {
      data = JSON.parse(raw)
    } catch {
      if (looksLikeHtml) {
        const hint =
          import.meta.env.DEV && !origin
            ? ' Plain "npm run dev" does not run Vercel serverless routes, so /api/demo-requests returns this page as HTML. Use "npm run dev:vercel" (with .env.local), or set VITE_PUBLIC_API_ORIGIN to your live Vercel URL in .env.local.'
            : ' The server returned a web page instead of JSON. Confirm /api/demo-requests is deployed and env vars are set on Vercel.'
        return {
          error: new Error(
            `Demo API returned HTML (${res.status}), not JSON.${hint}`
          ),
        }
      }
      return {
        error: new Error(
          `Demo API returned non-JSON (${res.status}). ${trimmed.slice(0, 120)}`
        ),
      }
    }
  }

  if (!res.ok) {
    const msg = typeof data?.error === 'string' ? data.error : res.statusText
    return { error: new Error(msg || 'Request failed.') }
  }

  return { error: null }
}
