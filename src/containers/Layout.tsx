import { Container, Grid } from '@material-ui/core'
import AppHeader from 'components/AppHeader'
import { FavoriteProvider } from 'context/favorite.context'
import { WatchListProvider } from 'context/watchList.context'
import { FC } from 'react'

const Layout: FC<{ withSearchBox: boolean }> = ({
  children,
  withSearchBox = false,
}) => {
  const favoriteList = JSON.parse(localStorage.getItem('favoriteList') ?? '{}')
  const watchList = JSON.parse(localStorage.getItem('watchList') ?? '{}')

  return (
    <FavoriteProvider
      value={{
        favoriteContextList: favoriteList,
        setFavoriteContextList: () => {},
      }}
    >
      <WatchListProvider
        value={{
          watchListInContext: watchList,
          setWatchListInContext: () => {},
        }}
      >
        <Container maxWidth="xl">
          <AppHeader hasSearchBox={withSearchBox} />
          <Grid container justifyContent="center">
            <Grid item xs={12} md={10}>
              {children}
            </Grid>
          </Grid>
        </Container>
      </WatchListProvider>
    </FavoriteProvider>
  )
}
export default Layout
