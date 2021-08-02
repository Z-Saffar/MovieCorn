import { Container, Grid } from '@material-ui/core'
import AppHeader from 'components/AppHeader'
import { FAVORITE_LIST, WATCH_LIST } from 'constant/constant'
import { FavoriteProvider } from 'context/favorite.context'
import { WatchListProvider } from 'context/watchList.context'
import { FC } from 'react'

const Layout: FC<{ withSearchBox: boolean }> = ({
  children,
  withSearchBox = false,
}) => {
  const favoriteList = JSON.parse(localStorage.getItem(FAVORITE_LIST) ?? '{}')
  const watchList = JSON.parse(localStorage.getItem(WATCH_LIST) ?? '{}')

  return (
    <FavoriteProvider
      value={{
        favoriteContextList: favoriteList,
        setFavoriteContextList: () => { },
      }}
    >
      <WatchListProvider
        value={{
          watchListInContext: watchList,
          setWatchListInContext: () => { },
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
