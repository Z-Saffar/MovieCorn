import axios from 'axios'
import { MovieDetails, MovieResult, Pagination } from 'types/types'
import { Endpoints } from './endpoints'

interface SearchParamType {
  searchText: string
  pageIndex: number
}

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_MOVIE_BASE_URL,
})

// Axios.interceptors.request.use(
//   function (config) {
//     debugger
//     return config
//   },
//   function (error) {
//     debugger
//     console.log('heeey', JSON.parse(JSON.stringify(error)))
//     return Promise.reject(error)
//   }
// )

// // Add a response interceptor
// Axios.interceptors.response.use(
//   function (response) {
//     debugger
//     return response
//   },
//   function (error) {
//     debugger
//     console.log()
//     return Promise.reject(error)
//   }
// )

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
}
