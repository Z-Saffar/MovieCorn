import React from "react"
import { getAllByRole, render, screen } from "@testing-library/react"
import MovieCard, { IMovieCard } from "."
import { build, fake } from '@jackfranklin/test-data-bot'


const movieBuilder = build<IMovieCard>('Movie', {
  fields: {
    description: fake(f => f.lorem.paragraph(10)),
    genres: fake(f => f.random.word()),
    imageUrl: fake(f => f.image.imageUrl),
    rate: 5,
    title: fake(f => f.lorem.words(4)),
    year: fake(f => f.date.past().getFullYear())

  },
});
test("renders MovieCard component", () => {
  const movie = movieBuilder()
  const { container, getByText, getByRole, debug } = render(<MovieCard {...movie} />)

  expect(getByRole('heading')).toHaveTextContent(`${movie.title} - (${movie.year})`)
  expect(getByText(movie.genres)).toBeInTheDocument()
  expect(getByText(movie.rate)).toBeInTheDocument()
  expect(getByText(movie.description)).toBeInTheDocument()
  expect(getAllByRole(container, 'button')).
})
