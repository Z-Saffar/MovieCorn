import { act, renderHook } from '@testing-library/react-hooks'
import faker from 'faker'
import { build, fake } from '@jackfranklin/test-data-bot'

import { useFavoriteContext, FavoriteProvider } from './favorite.context'
import type { Movie } from 'components/MovieCard/types'

const movieBuilder = build<Movie>('Movie', {
  fields: {
    id: fake((f) => f.random.uuid()),
    description: fake((f) => f.lorem.paragraph(10)),
    imageUrl: fake((f) => f.image.imageUrl()),
    title: fake((f) => f.lorem.words(2)),
    year: fake((f) => f.date.past()),
    rank: fake((f) => f.random.number(10)),
  },
})

test('should return expected value', async () => {
  const { result } = renderHook(() => useFavoriteContext(), {
    wrapper: FavoriteProvider,
  })

  const testData = {
    [faker.random.number()]: movieBuilder(),
  }

  act(() => result.current.setFavoriteContextList(testData))
  expect(result.current.favoriteContextList).toStrictEqual(testData)
})
