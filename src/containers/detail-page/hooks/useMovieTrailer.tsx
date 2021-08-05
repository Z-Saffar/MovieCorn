import { apis } from 'api/axiosClient'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Trailer } from 'types/types'
import { MovieDetailParam } from './useMovieDetail'

export function useMovieTrailer() {
  const [data, setData] = useState<Trailer>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const param = useParams<MovieDetailParam>()

  useEffect(() => {
    const apiCall = async () => {
      const result = await apis.getTrailer(Number(param.movieId)).catch((err) => {
        setError(err.status_message)
        setLoading(false)
      })
      if (result) {
        setData(result?.data?.results?.[0])
        setLoading(false)
      }
    }
    apiCall()
  }, [param.movieId])

  return { loading, data, error }
}
