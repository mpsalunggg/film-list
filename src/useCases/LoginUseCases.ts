import { RequestTokenType, SessionIdType } from '@/domains/Login'
import {
  fetchDetailProfile,
  fetchRequestToken,
  fetchSessionId,
} from '@/services/LoginServices'

export const getRequestToken = async () => {
  const res = await fetchRequestToken()
  const { request_token } = res.data
  sessionStorage.setItem('requestToken', request_token)
  return request_token
}

export const getSessionId = async (requestToken: RequestTokenType) => {
  const res = await fetchSessionId(requestToken)
  const { session_id } = res.data
  sessionStorage.setItem('sessionId', session_id)
  return session_id
}

export const getDetailProfile = async (sessionId: SessionIdType) => {
  const res = await fetchDetailProfile(sessionId)
  const profileJSON = JSON.stringify(res.data)
  sessionStorage.setItem('profile', profileJSON)
  return res.data
}
