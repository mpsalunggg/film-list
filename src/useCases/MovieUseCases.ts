import { formatMoviesWithFav, MoviesRequestParams } from '@/domains/Movie'
import {
  fetchDiscover,
  fetchGenres,
  fetchMovies,
} from '@/services/MovieServices'
import { getFavoritesMovie } from './FavoriteUseCases'

export const getMovies = async (params: MoviesRequestParams) => {
  let response
  const fav = await getFavoritesMovie()
  if (params.query) {
    response = await fetchMovies(params)
  } else {
    response = await fetchDiscover(params)
  }
  return formatMoviesWithFav(response, fav)
}

export const getGenres = async () => {
  const response = await fetchGenres()
  return response.data.genres
}
