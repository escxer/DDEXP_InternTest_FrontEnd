export type CurrentAdmin = {
  name: string
  company: string
}

// Temporary profile for development, not an authenticated session.
// Replace this implementation with an authenticated current-user API call.
export async function getCurrentAdmin(): Promise<CurrentAdmin> {
  return {
    name: "Nattakarn Lim",
    company: "DDEXP",
  }
}
