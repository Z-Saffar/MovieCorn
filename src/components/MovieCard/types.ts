export interface Movie {
  title: string
  year: Date
  rank: number
  description: string
  imageUrl: string
  imageWidth?: number
  id: number
}
export interface MovieCardProps {
  item: Movie
}

export type StoredData = Record<number, Movie>
