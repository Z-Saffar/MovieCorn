import { apis } from "api/axiosClient"
import * as React from "react"
import { MovieResult } from "../types"

export function useTopRated() {
  const [topRateData, setTopRateData] = React.useState<MovieResult[]>()
  React.useEffect(() => {
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
