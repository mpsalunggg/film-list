import { redirectToAuthentication } from '@/domains/Login'
import { messageAlert } from '@/helpers/message'
import {
  getDetailProfile,
  getRequestToken,
  getSessionId,
} from '@/useCases/LoginUseCases'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useSessionIdMutation = () => {
  return useMutation({
    mutationKey: ['sessionId'],
    mutationFn: (requestToken: string) => {
      return getSessionId(requestToken)
    },
    onSuccess: () => {
      messageAlert('success', 'Login Success!')
    },
  })
}

export const useRequestTokenMutation = () => {
  return useMutation({
    mutationKey: ['requestMutation'],
    mutationFn: async () => {
      return getRequestToken()
    },
    onSuccess: (data) => {
      redirectToAuthentication(data)
    },
  })
}

export const useDetailProfile = (sessionId: string) => {
  return useQuery({
    queryKey: ['detailProfile'],
    queryFn: async () => {
      return getDetailProfile(sessionId)
    },
    enabled: sessionId ? true : false,
  })
}
