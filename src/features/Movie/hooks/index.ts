import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  getGenres,
  getMovies,
} from '@/useCases/MovieUseCases'
import { messageAlert } from '@/helpers/message'
import { postFavoriteMovie } from '@/useCases/FavoriteUseCases'

export const useGetMovie = (params: Record<string, any>, current: number) => {
  return useQuery({
    queryKey: ['getMovies', { params, current }],
    queryFn: async () => {
      return getMovies({
        page: current,
        query: params.search,
        sort_by: params.sort,
        with_genres: params.filter,
      })
    },
  })
}

export const useGetGenre = () => {
  return useQuery({
    queryKey: ['getGenre'],
    queryFn: async () => {
      return getGenres()
    },
  })
}

export const useCreateFavoriteMovie = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['createFavoriteMovie'],
    mutationFn: async (id: number) => {
      return postFavoriteMovie({
        media_type: 'movie',
        media_id: id,
        favorite: true,
      })
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(['getMovies'])
      messageAlert('success', data.status_message, 'mt-[5.3rem]')
    },
    onError: () => {
      messageAlert('error', 'You must be login again!', 'mt-[5.3rem]')
    },
  })
}
