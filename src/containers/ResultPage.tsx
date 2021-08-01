import { Box, Button, CircularProgress, createStyles, makeStyles, Theme } from '@material-ui/core';
import * as React from 'react';
import MovieCard from "../components/MovieCard/MovieCard";
import { useQuery } from "../hooks/useQuery";
import useLazySearchMovie from "../hooks/useSearchMovie";
import Layout from "./Layout";

const ResultPage = () => {
    const classes = useStyles()
    const query = useQuery();
    const searchText = query.get('q') ?? "";
    const [search, movies, nextPage] = useLazySearchMovie()

    React.useEffect(() => {
        search(searchText);
    }, [searchText, search]);

    if (!movies) {
        <Layout withSearchBox={true}>
            <Box minHeight={300} position='relative'>
                <CircularProgress classes={{ root: classes.progress }} />
            </Box>
        </Layout>
    }

    return (<Layout withSearchBox={true}>
        <Box mt={10} mb={10} textAlign='center'>
            {
                movies?.map((item) => {
                    return <MovieCard description={item.overview}
                        imageUrl={item.poster_path}
                        imageWidth={500}
                        rank={item.vote_average}
                        rate={5}
                        title={item.title}
                        year={item.release_date}
                        id={item.id}
                        key={item.id}
                    />
                })

            }

            <Button variant='contained' color='primary'
                className={classes.loadMore}
                onClick={() => {
                    nextPage()
                }}
            >load more ...</Button>

        </Box>

    </Layout>)
}
export default ResultPage

const useStyles = makeStyles((theme: Theme) => createStyles({
    progress: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        margin: 'auto',
    },
    loadMore: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(1, 4)
    }
}),
);