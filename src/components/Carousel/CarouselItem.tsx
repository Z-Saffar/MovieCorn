import { Box } from '@material-ui/core'
import { VFC } from 'react'
export interface ICarouselItemProps {
  imageUrl: string
  title: string
}
const CarouselItem: VFC<ICarouselItemProps> = ({ imageUrl, title }) => {
  return (
    <Box maxHeight={400} mt={2} mb={2}>
      <img src={imageUrl} alt={title} />
    </Box>
  )
}
export default CarouselItem
