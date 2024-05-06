import { messageAlert } from '@/helpers/message'
import {
  deleteFavoriteMovie,
  getFavoritesMovie,
} from '@/useCases/FavoriteUseCases'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const useFavoriteMovie = () => {
  return useQuery({
    queryKey: ['favoriteMovie'],
    queryFn: async () => {
      return await getFavoritesMovie()
    },
  })
}

export const useRemoveFavoriteMovie = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['createFavoriteMovie'],
    mutationFn: async (id: number) => {
      return deleteFavoriteMovie({
        media_type: 'movie',
        media_id: id,
        favorite: false,
      })
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(['favoriteMovie'])
      messageAlert('success', data.status_message, 'mt-[5.3rem]')
    },
    onError: () => {
      messageAlert('error', 'You must be login again!', 'mt-[5.3rem]')
    },
  })
}
