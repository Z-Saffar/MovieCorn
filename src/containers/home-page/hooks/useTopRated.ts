import { apis } from 'api/axiosClient'
import { useEffect, useState } from 'react'
import { MovieResult } from 'types/types'

export function useTopRated() {
  const [topRateData, setTopRateData] = useState<MovieResult[]>()
  const [error, setError] = useState<string>('')
  useEffect(() => {
    const apiCall = async () => {
      const result = await apis.getLatestData()
      console.log('🦎 ~ apiCall ~ result', result)
    }
    apiCall()
  }, [])

  return {
    topRateData,
    error,
  }
}
