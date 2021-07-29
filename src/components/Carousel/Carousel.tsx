import { Box, CircularProgress } from '@material-ui/core';
import React, { VFC } from 'react';
import ReactCarousel, { CarouselProps } from 'react-material-ui-carousel';
import { TopRated } from '../../containers/home-page/hooks/types';
import { getAbsoluteImageURL } from '../../helper';
import CarouselItem from './CarouselItem';

export interface ICarouselProps extends CarouselProps {
    items?: TopRated[]
}
const Carousel: VFC<ICarouselProps> = (props) => {
    const { items, ...others } = props

    return (
        <Box height={600}>
            {!items && <CircularProgress />}
            <ReactCarousel
                animation='slide'
                {...others}
            >
                {
                    items?.slice(0, 5).map((item, i) => {
                        console.log("🦎 ~ items?.map ~ getAbsoluteImageURL", getAbsoluteImageURL(item.backdrop_path, 500))
                        return <CarouselItem key={i} title={item.title}
                            imageUrl={getAbsoluteImageURL(item.backdrop_path, 500)} />;
                    })
                }
            </ReactCarousel>
        </Box>
    )
}


export default Carousel