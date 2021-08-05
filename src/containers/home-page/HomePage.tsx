import { Box, createStyles, makeStyles, Theme, Typography } from '@material-ui/core'
import Carousel from 'components/Carousel/Carousel'
import Loading from 'components/Loading'
import SearchBox from 'components/SearchBox/SearchBox'
import Layout from 'containers/Layout'
import { useTopRated } from './hooks/useTopRated'

const HomePage = () => {
  const classes = useStyles()
  const { topRateData, error, loading } = useTopRated()

  return (
    <Layout withSearchBox={false}>
      <Box mt={8}>
        {loading && <Loading />}
        {error ? (
          <Box className={classes.error}>
            <Typography color="textPrimary" variant="h5">
              {error}
            </Typography>
          </Box>
        ) : (
          <Carousel items={topRateData} />
        )}
        <div className={classes.searchWrapper}>
          <Box className={classes.searchInnerWrapper}>
            <SearchBox />
          </Box>
        </div>
      </Box>
    </Layout>
  )
}
export default HomePage

const useStyles = makeStyles((theme: Theme) => {
  const {
    spacing,
    breakpoints: { up },
    palette,
    shape,
  } = theme
  return createStyles({
    searchWrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: spacing(2),
    },
    searchInnerWrapper: {
      border: '1px solid',
      borderRadius: shape.borderRadius,
      borderColor: palette.grey[500],
      width: '100%',
      marginTop: spacing(3),
      padding: spacing(0.5, 0.5),
      [up('md')]: {
        width: '80%',
      },
      [up('lg')]: {
        width: '70%',
      },
    },
    error: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 400,
    },
  })
})
