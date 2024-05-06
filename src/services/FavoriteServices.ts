import { FavoritesType, MoviesDataFavorites } from '@/domains/Favorite'
import { getSessionId, getSessionProfile } from '@/helpers/storage'
import axiosInstance from './adapter/axiosInstance'

export const fetchFavoritesMovie = async () => {
  const profile = getSessionProfile()
  const sessionId = getSessionId()
  return await axiosInstance.get(
    `https://api.themoviedb.org/3/account/${profile.id}/favorite/movies?session_id=${sessionId}`
  )
}

export const createFavoritesMovie = async (
  data: MoviesDataFavorites
): Promise<FavoritesType> => {
  const profile = getSessionProfile()
  const sessionId = getSessionId()
  return await axiosInstance.post(
    `/account/${profile.id}/favorite?session_id=${sessionId}`,
    data
  )
}

export const removeFavoritesMovie = async (
  data: MoviesDataFavorites
): Promise<FavoritesType> => {
  const profile = getSessionProfile()
  const sessionId = getSessionId()
  return await axiosInstance.post(
    `/account/${profile.id}/favorite?session_id=${sessionId}`,
    data
  )
}
