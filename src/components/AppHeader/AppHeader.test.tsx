import { render } from '@testing-library/react'
import { FavoriteProvider } from 'context/favorite.context'
import { WatchListProvider } from 'context/watchList.context'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
import AppHeader from './AppHeader'

const renderAppHeaderWithSearch = () => {
  const history = createMemoryHistory()

  return (
    <Router history={history}>
      <FavoriteProvider
        value={{
          favoriteContextList: {},
          setFavoriteContextList: () => {},
        }}
      >
        <WatchListProvider
          value={{
            watchListInContext: {},
            setWatchListInContext: () => {},
          }}
        >
          <AppHeader hasSearchBox={true} />
        </WatchListProvider>
      </FavoriteProvider>
    </Router>
  )
}

const renderAppHeaderWithoutSearch = () => {
  const history = createMemoryHistory()

  return (
    <Router history={history}>
      <FavoriteProvider
        value={{
          favoriteContextList: {},
          setFavoriteContextList: () => {},
        }}
      >
        <WatchListProvider
          value={{
            watchListInContext: {},
            setWatchListInContext: () => {},
          }}
        >
          <AppHeader hasSearchBox={false} />
        </WatchListProvider>
      </FavoriteProvider>
    </Router>
  )
}
test('renders AppHeader component with searchBox', () => {
  const { getByText, getByRole, findByRole } = render(renderAppHeaderWithSearch())

  expect(getByRole('banner')).toBeInTheDocument()

  const linkEl = getByRole('link', {
    name: /logo.svg/i,
  })
  expect(linkEl).toBeInTheDocument()

  expect(getByText('MovieCorn')).toBeInTheDocument()

  expect(
    getByRole('textbox', {
      name: /search/i,
    })
  ).toBeInTheDocument()
})

test('renders AppHeader component without searchBox', () => {
  const { getByText, getByRole } = render(renderAppHeaderWithoutSearch())

  expect(getByRole('banner')).toBeInTheDocument()

  const linkEl = getByRole('link', {
    name: /logo.svg/i,
  })
  expect(linkEl).toBeInTheDocument()

  expect(getByText('MovieCorn')).toBeInTheDocument()

  //TODO : it should test after mocking breakpoint

  // const searchText = await findByRole('textbox')
  // debug(searchText)

  // expect(getByRole('button', {
  //     name: /show favorite movies/i
  // })).toBeInTheDocument()
})
