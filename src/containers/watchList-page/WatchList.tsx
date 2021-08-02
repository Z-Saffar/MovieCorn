import {
  Box,
  Grid
} from '@material-ui/core'
import MovieCard from 'components/MovieCard'
import NoItem from 'components/NoItem'
import { useWatchListContext } from 'context/watchList.context'

const WatchList = () => {
  const { watchListInContext } = useWatchListContext()
  const watchListCount = Object.keys(watchListInContext).length
  return watchListCount === 0 ? (
    <NoItem text='No item in your watch list!!!' />
  ) : (
    <Box mt={4} mb={8}>
      <Grid container>
        {Object.entries(watchListInContext).map(([index, movieObj]) => {
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
export default WatchList

