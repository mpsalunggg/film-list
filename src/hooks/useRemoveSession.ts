import { getSessionId, removeAllStorage } from '@/helpers/storage'
import axiosInstance from '@/services/adapter/axiosInstance'
import { useMutation } from '@tanstack/react-query'
import { message } from 'antd'
import { useRouter } from 'next/router'

export const useRemoveSession = () => {
  const router = useRouter()
  return useMutation({
    mutationKey: ['removeSession'],
    mutationFn: async () => {
      const res = await axiosInstance.delete(
        `/authentication/session?api_key=${
          process.env.API_KEY
        }&session_id=${getSessionId()}`
      )
      return res.data
    },
    onSuccess: () => {
      removeAllStorage()
      message.open({
        type: 'success',
        content: 'Logout success, Wait 2 Seconds!',
        duration: 2,
        onClose: () => {
          router.push('/')
        },
        className: 'mt-[5.3rem]',
      })
    },
  })
}
