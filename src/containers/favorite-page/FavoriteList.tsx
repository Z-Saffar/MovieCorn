import { Grid, Typography, Box, createStyles, makeStyles, Theme } from "@material-ui/core"
import MovieCard from "../../components/MovieCard/MovieCard"
import { useFavoriteContext } from "../../context/favorite.context"

const FavoriteList = () => {
    const classes = useStyles()
    const { favoriteContextList } = useFavoriteContext()
    return (
        (Object.keys(favoriteContextList).length === 0) ?
            <Box className={classes.noItemWrapper}>
                <Typography variant='h5'> no item in your favorite list!!!</Typography>
            </Box>
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

const useStyles = makeStyles((theme: Theme) => createStyles({

    noItemWrapper: {
        height: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

}),
);