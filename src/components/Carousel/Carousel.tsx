import React, { VFC } from 'react';
import Carousel, { CarouselProps } from 'react-material-ui-carousel';
import CarouselItem, { ICarouselItemProps } from './CarouselItem';

export interface ICarouselProps extends CarouselProps {
    items: ICarouselItemProps[]
}
const MyCarousel: VFC<ICarouselProps> = (props) => {
    const { items, ...others } = props
    return (
        <Carousel
            animation='slide'
            {...others}
        >
            {
                items.map((item, i) => <CarouselItem key={i} {...item} />)
            }
        </Carousel>
    )
}


export default MyCarousel