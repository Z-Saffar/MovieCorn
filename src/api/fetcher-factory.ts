import axios, { AxiosInstance } from "axios"

export const AxiosSingleton = (() => {
  let instance: AxiosInstance
  return {
    getInstance: () => {
      if (!instance) {
        instance = axios.create({
          baseURL: process.env.REACT_APP_MOVIE_BASE_URL,
        })
      }
      return instance
    },
  }
})()
