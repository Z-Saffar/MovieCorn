export interface Pagination<T> {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}

export interface MovieResult {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: Date
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface MovieDetails extends MovieResult {
  budget: number
  genres: Genres[]
  imdb_id?: string
  production_companies: ProductionCompanies[]
  production_countries: ProductionCountries[]
  revenue: number
  runtime: number
  status: string
  spoken_languages: { name: string }
}

type ProductionCompanies = {
  name: string
  id: number
  logo_path?: string
  origin_country: string
}
type ProductionCountries = {
  iso_3166_1: string
  name: string
}

type Genres = {
  id: number
  name: string
}
