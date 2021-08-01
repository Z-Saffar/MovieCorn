import { apis } from 'api/axiosClient'
import { MovieResult } from 'containers/home-page/types'
import { useCallback, useState } from 'react'
import { useQuery } from './useQuery'

const useLazySearchMovie = (): [
  (searchText: string) => Promise<void>,
  MovieResult[] | undefined,
  () => void
] => {
  const [movies, setMovies] = useState<MovieResult[]>()
  const [pageIndex, setPageIndex] = useState<number>(1)
  const query = useQuery()

  const search = useCallback(
    async (searchText: string) => {
      const { data } = await apis.searchData({ searchText, pageIndex })
      const queryParam = query.get('q')
      if (movies?.length && queryParam === searchText) {
        setMovies([...movies, ...data.results])
      } else {
        setMovies(data.results)
      }
    },
    [movies, pageIndex, query]
  )

  const nextPage = () => {
    setPageIndex(pageIndex + 1)
  }

  return [search, movies, nextPage]
}
export default useLazySearchMovie
