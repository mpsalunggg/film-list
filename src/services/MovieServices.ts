import { MOVIE_LIST, MOVIE_SEARCH } from '@/constant/endpoint'
import {
  GenresType,
  MoviesRequestParams,
  MoviesType,
} from '@/domains/Movie'
import axiosInstance from './adapter/axiosInstance'

export const fetchDiscover = async (
  params: MoviesRequestParams
): Promise<MoviesType> => {
  return await axiosInstance.get(MOVIE_LIST, {
    params: {
      ...params,
    },
  })
}

export const fetchMovies = async (
  params: MoviesRequestParams
): Promise<MoviesType> => {
  return await axiosInstance.get(MOVIE_SEARCH, {
    params: {
      ...params,
    },
  })
}

export const fetchGenres = async (): Promise<GenresType> => {
  return await axiosInstance.get('/genre/movie/list')
}


