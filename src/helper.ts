import { FAVORITE_LIST, WATCH_LIST } from 'constant/constant'

export const getAbsoluteImageURL = (
  key: string,
  width: number | 'original' | undefined
) => {
  return `${process.env.REACT_APP_MOVIE_CDN}/w${width || 500}${key}`
}

export const localstorageInitialization = () => {
  const favoriteList = localStorage.getItem(FAVORITE_LIST)
  const watchList = localStorage.getItem(WATCH_LIST)
  if (!favoriteList) {
    localStorage.setItem(FAVORITE_LIST, JSON.stringify({}))
  }
  if (!watchList) {
    localStorage.setItem(WATCH_LIST, JSON.stringify({}))
  }
}
