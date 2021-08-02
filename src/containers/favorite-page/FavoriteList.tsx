import {
  Box,
  Grid
} from '@material-ui/core'
import MovieCard from 'components/MovieCard'
import NoItem from 'components/NoItem'
import { useFavoriteContext } from 'context/favorite.context'

const FavoriteList = () => {
  const { favoriteContextList } = useFavoriteContext()
  const favoriteCount = Object.keys(favoriteContextList).length
  return favoriteCount === 0 ? (
    <NoItem text='No item in your favorite list!!!' />
  ) : (
    <Box mt={4} mb={8}>
      <Grid container>
        {Object.entries(favoriteContextList).map(([id, movieObj]) => {
          return (
            <Grid item xs={12} key={movieObj.id}>
              <MovieCard item={movieObj} />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
export default FavoriteList

