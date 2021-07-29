export const getAbsoluteImageURL = (key: string, width: number) => {
  return `${process.env.REACT_APP_MOVIE_CDN}/w${width}${key}`
}
