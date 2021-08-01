export const getAbsoluteImageURL = (
  key: string,
  width: number | 'original' | undefined
) => {
  return `${process.env.REACT_APP_MOVIE_CDN}/w${width || 500}${key}`
}
