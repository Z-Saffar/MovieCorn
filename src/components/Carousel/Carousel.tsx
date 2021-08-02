import {
  Box,
  CircularProgress,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import { MovieResult } from 'containers/home-page/types'
import { getAbsoluteImageURL } from 'helper'
import React, { VFC } from 'react'
import ReactCarousel, { CarouselProps } from 'react-material-ui-carousel'
import CarouselItem from './CarouselItem'

export interface ICarouselProps extends CarouselProps {
  items?: MovieResult[]
}
const Carousel: VFC<ICarouselProps> = (props) => {
  const classes = useStyles()
  const { items, ...others } = props

  return (
    <Box className={classes.root}>
      {!items && <CircularProgress classes={{ root: classes.progress }} />}
      <ReactCarousel animation="slide" {...others}>
        {items?.slice(0, 5).map((item) => {
          return (
            <CarouselItem
              key={item.id}
              title={item.title}
              imageUrl={getAbsoluteImageURL(item.backdrop_path, 1280)}
            />
          )
        })}
      </ReactCarousel>
    </Box>
  )
}

export default Carousel

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      minHeight: 400,
      display: 'flex',
      justifyContent: 'center',
    },
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
