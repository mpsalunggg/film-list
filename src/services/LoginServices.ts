import { AuthType, RequestTokenType, SessionIdType } from '@/domains/Login'
import axiosInstance from './adapter/axiosInstance'

export const fetchRequestToken = async (): Promise<AuthType> => {
  return await axiosInstance.get(
    '/authentication/token/new?api_key=' + process.env.API_KEY
  )
}

export const fetchSessionId = async (
  requestToken: RequestTokenType
): Promise<AuthType> => {
  return await axiosInstance.get(
    `/authentication/session/new?api_key=${process.env.API_KEY}&request_token=${requestToken}`
  )
}

export const fetchDetailProfile = async (
  sessionId: SessionIdType
): Promise<AuthType> => {
  return await axiosInstance.get(
    `/account?api_key=${process.env.API_KEY}&session_id=${sessionId}`
  )
}