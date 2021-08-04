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

export const apis = {
  getLatestData: () =>
    Axios.get<Pagination<MovieResult>>(Endpoints.TOP_RATED, {
      params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
        language: 'en_US',
        page: Math.floor(Math.random() * (5 - 1 + 1) + 1),
      },
    }),
  searchData: ({ searchText, pageIndex }: SearchParamType) =>
    Axios.get<Pagination<MovieResult>>(Endpoints.SEARCH, {
      params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
        language: 'en_US',
        include_adult: false,
        query: searchText,
        page: pageIndex,
      },
    }),
}
