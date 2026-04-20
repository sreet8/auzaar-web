import React, { createContext, useContext, useMemo } from 'react'

const AuthContext = createContext()

/**
 * Lightweight auth shell for a public marketing site.
 * Wire this to Supabase Auth later if you add sign-in.
 */
export function AuthProvider({ children }) {
  const value = useMemo(
    () => ({
      user: null,
      isAuthenticated: false,
      isLoadingAuth: false,
      isLoadingPublicSettings: false,
      authError: null,
      authChecked: true,
      appPublicSettings: null,
      logout: () => {},
      navigateToLogin: () => {},
      checkUserAuth: async () => {},
      checkAppState: async () => {},
    }),
    []
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
