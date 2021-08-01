import React from 'react'
import { getAllByRole, render } from '@testing-library/react'
import { build, fake } from '@jackfranklin/test-data-bot'
import { MovieCardProps } from './types'
import MovieCard from '.'

const movieBuilder = build<MovieCardProps>('Movie', {
  fields: {
    description: fake((f) => f.lorem.paragraph(10)),
    imageUrl: fake((f) => f.image.imageUrl),
    title: fake((f) => f.lorem.words(4)),
    year: fake((f) => f.date.past().getFullYear()),
    id: 123,
    rank: 8.5,
  },
})
test('renders MovieCard component', () => {
  const movie = movieBuilder()
  const { container, getByText, getByRole, debug } = render(<MovieCard {...movie} />)

  expect(getByRole('heading')).toHaveTextContent(`${movie.title} - (${movie.year})`)
  expect(getByText(movie.description)).toBeInTheDocument()
  // expect(getAllByRole(container, 'button'))
})
