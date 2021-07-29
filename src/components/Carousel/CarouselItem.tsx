import { Button, Paper } from "@material-ui/core"
import { VFC } from "react"
export interface ICarouselItemProps {
    imageUrl: string
    title: string
}
const CarouselItem: VFC<ICarouselItemProps> = ({ imageUrl, title }) => {
    return (

        <img src={imageUrl} alt={title} />

    )
}
export default CarouselItem