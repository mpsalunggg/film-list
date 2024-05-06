export type AuthType = any
export type RequestTokenType = string
export type SessionIdType = string

export const redirectToAuthentication = (requestToken: string) => {
  window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:3000`
}