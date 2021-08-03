import { build, fake } from '@jackfranklin/test-data-bot'
import { render } from '@testing-library/react'
import CarouselItem, { CarouselItemProps } from './CarouselItem'

const carouselItemBuilder = build<CarouselItemProps>('Movie', {
    fields: {
        imageUrl: fake((f) => f.image.imageUrl),
        title: fake((f) => f.lorem.words(4)),
    },
})
test('renders Carousel item', () => {
    const data = carouselItemBuilder()
    const { getByAltText, getByRole } = render(
        <CarouselItem {...data} />
    )

    expect(getByRole('img')).toBeInTheDocument()

    expect(getByAltText(data.title)).toBeInTheDocument()


})



