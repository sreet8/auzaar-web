import { getSupabaseBrowserClient } from '@/lib/supabaseClient'

const TABLE = 'demo_requests'

/**
 * @param {Record<string, unknown>} row
 * @returns {Promise<{ error: Error | null }>}
 */
export async function createDemoRequest(row) {
  const supabase = getSupabaseBrowserClient()
  if (!supabase) {
    return {
      error: new Error(
        'Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.'
      ),
    }
  }

  const payload = {
    full_name: row.full_name,
    work_email: row.work_email,
    company: row.company,
    job_title: row.job_title || null,
    company_size: row.company_size || null,
    exploring: row.exploring || null,
    message: row.message || null,
    status: 'new',
  }

  const { error } = await supabase.from(TABLE).insert(payload)
  return { error: error ? new Error(error.message) : null }
}
