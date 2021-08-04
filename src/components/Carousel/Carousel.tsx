import {
  Box,
  CircularProgress,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core'
import { MovieResult } from 'containers/home-page/types'
import React, { VFC } from 'react'
import ReactCarousel, { CarouselProps } from 'react-material-ui-carousel'
import Banner from './Banner/Banner'
import useBanner from './Banner/useBanner'

export interface ICarouselProps extends CarouselProps {
  items?: MovieResult[]
}

const Carousel: VFC<ICarouselProps> = (props) => {
  const classes = useStyles()
  const { items, ...others } = props
  const bannerItems = useBanner(items)
  return (
    <Box className={classes.root}>
      {!items || !items.length ? <CircularProgress classes={{ root: classes.progress }} /> :
        <ReactCarousel animation="slide" autoPlay={false} {...others}>
          {
            bannerItems?.map((banner, index) => {
              return <Banner items={banner} key={index} />
            })
          }
        </ReactCarousel>
      }
    </Box>
  )
}

export default Carousel

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    progress: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      margin: 'auto',
    },
  })
)
