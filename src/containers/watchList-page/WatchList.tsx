import { Grid, Typography } from "@material-ui/core"
import MovieCard from "../../components/MovieCard/MovieCard"
import { useWatchListContext } from "../../context/watchList.context"

const WatchList = () => {
    const { watchListInContext } = useWatchListContext()
    return (
        (Object.keys(watchListInContext).length === 0) ?
            <Typography variant='h5'> no item in your watch list!!!</Typography>
            :
            <Grid container>
                {Object.entries(watchListInContext).map((item) => {
                    const movieObj = item[1]
                    return <Grid item xs={12} key={movieObj.id} ><MovieCard {...movieObj}
                    /></Grid>
                })}
            </Grid>
    )

}
export default WatchList