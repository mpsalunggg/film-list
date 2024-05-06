import { MoviesDataFavorites } from '@/domains/Favorite'
import { formatMovies } from '@/domains/Movie'
import {
  createFavoritesMovie,
  fetchFavoritesMovie,
  removeFavoritesMovie,
} from '@/services/FavoriteServices'

export const getFavoritesMovie = async () => {
  const response = await fetchFavoritesMovie()
  return formatMovies(response)
}

export const postFavoriteMovie = async (data: MoviesDataFavorites) => {
  const response = await createFavoritesMovie(data)
  return response.data
}

export const deleteFavoriteMovie = async (data: MoviesDataFavorites) => {
  const response = await removeFavoritesMovie(data)
  return response.data
}
