import { Button, Paper } from "@material-ui/core"
import { VFC } from "react"
export interface ICarouselItemProps {
    name: string
    description: string
    imageUrl: string
}
const CarouselItem: VFC<ICarouselItemProps> = ({ name, description, imageUrl }) => {
    return (
        <Paper>
            <h2>{name}</h2>
            <p>{description}</p>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
export default CarouselItem