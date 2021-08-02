import { apis } from 'api/axiosClient'
import { MovieResult } from 'containers/home-page/types'
import { useCallback, useState } from 'react'

const useLazySearchMovie = (): [
  (searchText: string, pageIndex: number) => Promise<void>,
  MovieResult[] | undefined
] => {
  const [movies, setMovies] = useState<MovieResult[]>()

  const search = useCallback(async (searchText: string, pageIndex: number) => {
    const { data } = await apis.searchData({ searchText, pageIndex })
    setMovies(data.results)
  }, [])

  return [search, movies]
}
export default useLazySearchMovie
