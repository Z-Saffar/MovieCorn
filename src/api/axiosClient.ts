import axios from 'axios'
import { MovieResult, Pagination } from 'containers/home-page/types'
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
    Axios.get<Pagination<MovieResult>>(Endpoints.TOP_RATED, {
      params: { api_key: process.env.REACT_APP_TMDB_API_KEY, language: 'en_US' },
    })
      .then((res) => {
        debugger
        return { data: res.data, error: null }
      })
      .catch((error) => {
        const errorObj = JSON.parse(JSON.stringify(error))

        // if (status === 401) {
        //   return {
        //     data: null,
        //     error: Errors.ERROR_401,
        //   }
        // } else if (status === 500) {
        //   return { data: null, error: Errors.ERROR_500 }
        // }
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
}
