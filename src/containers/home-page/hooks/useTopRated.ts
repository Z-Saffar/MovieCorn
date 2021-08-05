import { apis } from 'api/axiosClient'
import { useEffect, useState } from 'react'
import { ServerError, MovieResult } from 'types/types'

export function useTopRated() {
  const [topRateData, setTopRateData] = useState<MovieResult[]>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const apiCall = async () => {
      const result = await apis.getLatestData().catch((err: ServerError) => {
        setError(err.status_message)
        setLoading(false)
      })
      if (result) {
        setTopRateData(result?.data?.results)
        setLoading(false)
      }
    }
    apiCall()
  }, [])

  return {
    topRateData,
    error,
    loading,
  }
}
