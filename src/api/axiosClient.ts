import axios, { AxiosError } from 'axios'
import { MovieDetails, MovieResult, Pagination, TrailerResponse } from 'types/types'
import { Endpoints } from './endpoints'

interface SearchParamType {
  searchText: string
  pageIndex: number
}

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_MOVIE_BASE_URL,
  timeout: 5000,
})

Axios.interceptors.response.use(
  function (response) {
    const { status } = response
    if (status === 401 || status === 404) {
      throw new Error(response.data.status_message)
    }
    return response
  },
  function (error: AxiosError) {
    const status = error.response?.status
    if (status === 401 || status === 404) {
      return Promise.reject({ ...error.response?.data })
    } else {
      return Promise.reject({
        status_message:
          'There is something wrong with connection. Please try again!',
      })
    }
  }
)

export const apis = {
  getLatestData: () =>
    Axios.get<Pagination<MovieResult>>(Endpoints.NOW_PLAYING, {
      params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
        language: 'en_US',
        page: Math.floor(Math.random() * (5 - 1 + 1) + 1),
      },
    }),
  searchData: ({ searchText, pageIndex }: SearchParamType) =>
    Axios.get<Pagination<MovieResult>>(Endpoints.SEARCH, {
      validateStatus: () => true,
      params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
        language: 'en_US',
        include_adult: false,
        query: searchText,
        page: pageIndex,
      },
    }),
  getMovieDetails: (id: number) =>
    Axios.get<MovieDetails>(`${Endpoints.DETAILS}/${id}`, {
      params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
        language: 'en_US',
      },
    }),
  getTrailer: (id: number) =>
    Axios.get<TrailerResponse>(`${Endpoints.DETAILS}/${id}/videos`, {
      params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
        language: 'en_US',
      },
    }),
}
