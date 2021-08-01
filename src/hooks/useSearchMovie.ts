import { apis } from "api/axiosClient"
import React, { useState } from "react"
import { MovieResult } from "../containers/home-page/types"
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
      const { data } = await apis.searchData({ searchText, pageIndex })
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
