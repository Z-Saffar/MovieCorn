import { build, fake } from '@jackfranklin/test-data-bot'
import { render } from '@testing-library/react'
import Banner, { BannerProps } from './Banner'

const bannerBuilder = build<BannerProps>('banner', {
  fields: {
    items: [
      {
        imageUrl: fake((f) => f.image.imageUrl),
        title: fake((f) => f.lorem.words(4)),
      },
      {
        imageUrl: fake((f) => f.image.imageUrl),
        title: fake((f) => f.lorem.words(4)),
      },
    ],
  },
})
test('renders Banner', () => {
  const data = bannerBuilder()
  const { container } = render(<Banner {...data} />)
  expect(container).toBeInTheDocument()
})
