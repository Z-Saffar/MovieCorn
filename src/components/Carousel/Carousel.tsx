import React, { VFC } from 'react'
import ReactCarousel, { CarouselProps } from 'react-material-ui-carousel'
import { MovieResult } from 'types/types'
import Banner from './Banner/Banner'
import useBanner from './Banner/useBanner'

export interface ICarouselProps extends CarouselProps {
  items?: MovieResult[]
}

const Carousel: VFC<ICarouselProps> = (props) => {
  const { items, ...others } = props
  const bannerItems = useBanner(items)
  return (
    <ReactCarousel animation="slide" autoPlay={false} {...others}>
      {
        bannerItems?.map((banner, index) => {
          return <Banner items={banner} key={index} />
        })
      }
    </ReactCarousel>
  )
}

export default Carousel

