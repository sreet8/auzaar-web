import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

/**
 * Browser Supabase client (anon key). Returns null when env is not configured.
 */
export function getSupabaseBrowserClient() {
  if (!url || !anonKey) return null
  return createClient(url, anonKey)
}
