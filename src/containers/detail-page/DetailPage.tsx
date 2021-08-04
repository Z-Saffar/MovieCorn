import { Box, CircularProgress, createStyles, makeStyles, Theme } from "@material-ui/core"
import MovieDetail from "components/MovieDetail"
import Layout from "containers/Layout"
import { useMovieDetail } from "./hooks/useMovieDetail"

const DetailPage = () => {
    const { data, loading } = useMovieDetail()
    const classes = useStyles()

    return (<Layout withSearchBox={true}>
        {
            data ? <MovieDetail  {...data} />
                : loading && <Box minHeight={300} position="relative">
                    <CircularProgress classes={{ root: classes.progress }} />
                </Box>
        }

    </Layout>
    )


}
export default DetailPage

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        progress: {
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            margin: 'auto',
        },

    })
)
