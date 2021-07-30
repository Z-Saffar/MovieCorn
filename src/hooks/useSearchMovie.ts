import React from "react"
import { Endpoints } from "../api/endpoints"
import { AxiosSingleton } from "../api/fetcher-factory"
import { MovieResult, Pagination } from "../containers/home-page/types"

const useLazySearchMovie = (): [
  (searchText: string) => Promise<void>,
  MovieResult[] | undefined
] => {
  const [movies, setMovies] = React.useState<MovieResult[]>()
  const search = React.useCallback(async (searchText: string) => {
    const { data } = await AxiosSingleton.getInstance().get<Pagination<MovieResult>>(
      Endpoints.SEARCH,
      {
        params: {
          api_key: process.env.REACT_APP_TMDB_API_KEY,
          language: "en_US",
          include_adult: false,
          query: searchText,
        },
      }
    )
    setMovies(data.results)
  }, [])

  return [search, movies]
}
export default useLazySearchMovie
