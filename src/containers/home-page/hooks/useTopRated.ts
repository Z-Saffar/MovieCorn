import * as React from "react"
import { Endpoints } from "../../../api/endpoints"
import { AxiosSingleton } from "../../../api/fetcher-factory"
import { Pagination, TopRated } from "../types"

export function useTopRated() {
  const [topRateData, setTopRateData] = React.useState<TopRated[]>()
  React.useEffect(() => {
    const apiCall = async () => {
      const { data } = await AxiosSingleton.getInstance().get<Pagination<TopRated>>(
        Endpoints.TOP_RATED,
        {
          params: { api_key: process.env.REACT_APP_TMDB_API_KEY, language: "en_US" },
        }
      )
      setTopRateData(data.results)
    }
    apiCall()
  }, [])

  return {
    topRateData,
  }
}
