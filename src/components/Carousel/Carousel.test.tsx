import { build, fake } from '@jackfranklin/test-data-bot'
import { render } from '@testing-library/react'
import Carousel, { ICarouselProps } from './Carousel'

const carouseBuilder = build<ICarouselProps>('Movie', {
    fields: {
        items: [{
            imageUrl: fake((f) => f.image.imageUrl),
            title: fake((f) => f.lorem.words(4)),
        },
        {
            imageUrl: fake((f) => f.image.imageUrl),
            title: fake((f) => f.lorem.words(4)),
        }
        ]
    },
})
test('renders Carousel with 2 item', () => {
    const data = carouseBuilder()
    const { getByAltText, getByRole } = render(
        <Carousel {...data} />
    )

})



