import { apis } from 'api/axiosClient'
import { useCallback, useState } from 'react'
import { MovieResult, ServerError } from 'types/types'

const useLazySearchMovie = (): [
  (searchText: string, pageIndex: number) => Promise<void>,
  { data: MovieResult[] | undefined; loading: boolean; error: string }
] => {
  const [movies, setMovies] = useState<MovieResult[]>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const search = useCallback(async (searchText: string, pageIndex: number) => {
    setLoading(true)
    const data = await apis
      .searchData({ searchText, pageIndex })
      .catch((err: ServerError) => {
        setError(err?.message || err?.status_message)
        setLoading(false)
      })
    if (data) {
      setMovies(data?.data?.results)
      setLoading(false)
    }
  }, [])
  return [search, { loading, data: movies, error }]
}
export default useLazySearchMovie
