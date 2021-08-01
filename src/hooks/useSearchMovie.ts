import React, { useState } from "react"
import { Endpoints } from "../api/endpoints"
import { AxiosSingleton } from "../api/fetcher-factory"
import { MovieResult, Pagination } from "../containers/home-page/types"
import { useQuery } from "./useQuery"

const useLazySearchMovie = (): [
  (searchText: string) => Promise<void>,
  MovieResult[] | undefined,
  () => void
] => {
  const [movies, setMovies] = useState<MovieResult[]>()
  const [pageIndex, setPageIndex] = useState<number>(1)
  const query = useQuery()

  const search = React.useCallback(
    async (searchText: string) => {
      const { data } = await AxiosSingleton.getInstance().get<
        Pagination<MovieResult>
      >(Endpoints.SEARCH, {
        params: {
          api_key: process.env.REACT_APP_TMDB_API_KEY,
          language: "en_US",
          include_adult: false,
          query: searchText,
          page: pageIndex,
        },
      })
      const queryParam = query.get("q")
      if (movies?.length && queryParam === searchText) {
        setMovies([...movies, ...data.results])
      } else {
        setMovies(data.results)
      }
    },
    [pageIndex]
  )

  const nextPage = () => {
    setPageIndex(pageIndex + 1)
  }

  return [search, movies, nextPage]
}
export default useLazySearchMovie
