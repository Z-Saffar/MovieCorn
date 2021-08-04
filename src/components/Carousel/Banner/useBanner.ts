import { MovieResult } from 'containers/home-page/types'
import { getAbsoluteImageURL } from 'helper'
import { useMediaDetector } from 'theme/useMediaDetector'
import { BannerItemType } from './Banner'

const useBanner = (items: MovieResult[] | undefined) => {
  const [isSmall, isMedium] = useMediaDetector()

  const slideCount = isSmall ? 1 : isMedium ? 2 : 3

  const itemsWithPoster = items?.filter((item) => item.poster_path)
  const bannerItems = itemsWithPoster?.map((item, index) => {
    return {
      imageUrl: getAbsoluteImageURL(item.backdrop_path, 1280),
      title: item.title,
    }
  })

  return bannerItems?.reduce((acc: Array<Array<BannerItemType>>, item, i) => {
    const index = Math.floor(i / slideCount)
    if (acc.length > index) {
      acc[index].push(item)
    } else {
      acc[index] = [item]
    }
    return acc
  }, [])
}
export default useBanner
