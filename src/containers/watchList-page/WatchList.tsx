import { Box, createStyles, Grid, makeStyles, Theme, Typography } from "@material-ui/core"
import MovieCard from "../../components/MovieCard/MovieCard"
import { useWatchListContext } from "../../context/watchList.context"

const WatchList = () => {
    const classes = useStyles()
    const { watchListInContext } = useWatchListContext()
    return (
        (Object.keys(watchListInContext).length === 0) ?
            <Box className={classes.noItemWrapper}>
                <Typography variant='h5'> no item in your watch list!!!</Typography>
            </Box>
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

const useStyles = makeStyles((theme: Theme) => createStyles({

    noItemWrapper: {
        height: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

}),
);