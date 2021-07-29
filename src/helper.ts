export const getAbsoluteImageURL = (key: string, width: number | "original") => {
  return `${process.env.REACT_APP_MOVIE_CDN}/w${width}${key}`
}
