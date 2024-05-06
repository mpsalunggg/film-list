import { FavoritesType } from './Favorite'

export type MoviesType = any
export type GenresType = any

export type MoviesFormatedType = {
  id: number
  original_title: string
  poster_path: string
  release_date: string
  overview: string | null
  vote_average: number
  isFavorite: boolean
}

export type MoviesRequestParams = {
  query?: string
  page?: number
  sort_by?: string
  with_genres?: string
}

export const formatRatesMovie = (rate: number): string => {
    return rate.toFixed(1)
}

export const formatMovies = (value: MoviesType): MoviesFormatedType[] => {
  return value.data.results.map((movie: any) => ({
    id: movie.id || '',
    original_title: movie.original_title || '',
    poster_path: movie.poster_path || '',
    release_date: movie.release_date || '',
    overview: movie.overview || '',
    vote_average: movie.vote_average || '',
  }))
}

export const formatMoviesWithFav = (
  value: MoviesType,
  fav?: FavoritesType
): MoviesFormatedType[] => {
  return value.data.results.map((movie: any) => ({
    id: movie.id || '',
    original_title: movie.original_title || '',
    poster_path: movie.poster_path || '',
    release_date: movie.release_date || '',
    overview: movie.overview || '',
    vote_average: movie.vote_average || '',
    isFavorite: fav.some(
      (favItem: FavoritesType) =>
        favItem.original_title === movie.original_title
    ),
  }))
}
