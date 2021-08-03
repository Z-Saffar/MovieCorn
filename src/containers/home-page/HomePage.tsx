import { Box, createStyles, makeStyles, Theme, Typography } from '@material-ui/core'
import Carousel from 'components/Carousel/Carousel'
import SearchBox from 'components/SearchBox/SearchBox'
import Layout from 'containers/Layout'
import { useTopRated } from './hooks/useTopRated'

const HomePage = () => {
  const classes = useStyles()
  const { topRateData, error } = useTopRated()
  console.log("🦎 ~ HomePage ~ error", error)

  return (
    <Layout withSearchBox={false}>
      <Box mt={8}>
        {error ? <Typography>{error}</Typography> :
          <Carousel items={topRateData} />
        }
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
      padding: spacing(0.5, 0.5),
      [up('md')]: {
        width: '80%',
      },
      [up('lg')]: {
        width: '70%',
      },
    },
  })
})
