import { apis } from 'api/axiosClient'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieDetails } from 'types/types'

export type MovieDetailParam = {
  movieId: string
}
export function useMovieDetail() {
  const [data, setData] = useState<MovieDetails>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const param = useParams<MovieDetailParam>()

  useEffect(() => {
    const apiCall = async () => {
      const result = await apis
        .getMovieDetails(Number(param.movieId))
        .catch((err) => {
          setError(err.status_message)
          setLoading(false)
        })
      if (result) {
        setData(result?.data)
      }
    }
    apiCall()
  }, [param.movieId])

  return { loading, data, error }
}
