import { apis } from 'api/axiosClient'
import { useEffect, useState } from 'react'
import { MovieResult } from 'types/types'

export function useTopRated() {
  const [topRateData, setTopRateData] = useState<MovieResult[]>()
  useEffect(() => {
    const apiCall = async () => {
      const { data } = await apis.getLatestData()
      setTopRateData(data.results)
    }
    apiCall()
  }, [])

  return {
    topRateData,
  }
}
