import { apis } from 'api/axiosClient'
import { MovieResult } from 'types/types'
import { useCallback, useState } from 'react'

const useLazySearchMovie = (): [
  (searchText: string, pageIndex: number) => Promise<void>,
  { data: MovieResult[] | undefined; loading: boolean }
] => {
  const [movies, setMovies] = useState<MovieResult[]>()
  const [loading, setLoading] = useState<boolean>(true)
  const search = useCallback(async (searchText: string, pageIndex: number) => {
    setLoading(true)
    const { data } = await apis.searchData({ searchText, pageIndex })
    setMovies(data.results)
    setLoading(false)
  }, [])
  return [search, { loading, data: movies }]
}
export default useLazySearchMovie
