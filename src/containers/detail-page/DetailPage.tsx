import { Box, Typography } from "@material-ui/core"
import Loading from "components/Loading"
import MovieDetail from "components/MovieDetail"
import Layout from "containers/Layout"
import { useMovieDetail } from "./hooks/useMovieDetail"

const DetailPage = () => {
    const { data, loading, error } = useMovieDetail()

    return (<Layout withSearchBox={true}>
        {error && <Box height={400} display='flex' alignItems='center' justifyContent='center'>
            <Typography color='textPrimary' variant='h5'>{error}</Typography></Box>}
        {
            data ? <MovieDetail  {...data} />
                : loading && <Loading />
        }

    </Layout>
    )


}
export default DetailPage