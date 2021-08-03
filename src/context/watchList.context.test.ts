import { act, renderHook } from '@testing-library/react-hooks'
import faker from 'faker'
import { build, fake } from '@jackfranklin/test-data-bot'

import { useWatchListContext, WatchListProvider } from './watchList.context'
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
  const { result } = renderHook(() => useWatchListContext(), {
    wrapper: WatchListProvider,
  })

  const testData = {
    [faker.random.number()]: movieBuilder(),
  }

  act(() => result.current.setWatchListInContext(testData))
  expect(result.current.watchListInContext).toStrictEqual(testData)
})
