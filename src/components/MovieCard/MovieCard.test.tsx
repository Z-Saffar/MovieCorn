import React from 'react'
import { getAllByRole, render } from '@testing-library/react'
import { build, fake } from '@jackfranklin/test-data-bot'
import { Movie } from './types'
import MovieCard from '.'
import { FavoriteProvider } from 'context/favorite.context'
import { WatchListProvider } from 'context/watchList.context'

import { createTheme, ThemeProvider } from '@material-ui/core'
import { getAbsoluteImageURL } from 'helper'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'


const SizeWrapper = (props: any) => {
  const history = createMemoryHistory()
  const theme = createTheme({
    props: { MuiWithWidth: { initialWidth: 'sm' } },
  })

  return <Router history={history}>
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
  </Router>
}

const movieBuilder = build<Movie>('Movie', {
  fields: {
    description: fake((f) => f.lorem.paragraph(10)),
    imageUrl: fake((f) => f.image.imageUrl()),
    title: fake((f) => f.lorem.words(2)),
    year: fake((f) => f.date.past()),
    id: 123,
    rank: 8.5,
  },
})
test('renders MovieCard component', () => {
  const movie = movieBuilder()

  const { getByText, getByRole } = render(
    <SizeWrapper>
      <FavoriteProvider value={{
        favoriteContextList: {},
        setFavoriteContextList: () => { },
      }}>
        <WatchListProvider value={{
          watchListInContext: {},
          setWatchListInContext: () => { }
        }}>
          <MovieCard item={movie} />
        </WatchListProvider>
      </FavoriteProvider>
    </SizeWrapper>
  )

  getByRole('heading', { name: `${movie.title} - (${movie.year.getFullYear()})` })
  getByText(movie.description)

  expect(getByRole('img', { name: movie.title })).toHaveAttribute(
    'src',
    getAbsoluteImageURL(movie.imageUrl, undefined)
  )

  getByRole('button', { name: /Favorite/i })
  getByRole('button', { name: /Watch list/i })
})

