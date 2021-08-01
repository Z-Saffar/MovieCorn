import { Grid, Typography } from "@material-ui/core"
import MovieCard from "../../components/MovieCard/MovieCard"
import { useFavoriteContext } from "../../context/favorite.context"

const FavoriteList = () => {
    const { favoriteContextList } = useFavoriteContext()
    return (
        (Object.keys(favoriteContextList).length === 0) ?
            <Typography variant='h5'> no item in your favorite list!!!</Typography>
            :
            <Grid container>
                {Object.entries(favoriteContextList).map((item) => {
                    const movieObj = item[1]
                    return <Grid item xs={12} key={movieObj.id}><MovieCard {...movieObj} /></Grid>
                })}

            </Grid>
    )

}
export default FavoriteList