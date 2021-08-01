import { Box, CircularProgress, createStyles, makeStyles, Theme } from '@material-ui/core';
import * as React from 'react';
import MovieCard from "../components/MovieCard/MovieCard";
import { getAbsoluteImageURL } from "../helper";
import { useQuery } from "../hooks/useQuery";
import useLazySearchMovie from "../hooks/useSearchMovie";
import Layout from "./Layout";

const ResultPage = () => {
    const classes = useStyles()
    const query = useQuery();
    const searchText = query.get('q') ?? "";
    const [search, movies] = useLazySearchMovie()

    React.useEffect(() => {
        search(searchText);
    }, [searchText, search]);

    return (<Layout withSearchBox={true}>
        {
            movies ? movies.map((item) => {
                return <Box mt={4}>
                    <MovieCard description={item.overview}
                        imageUrl={getAbsoluteImageURL(item.poster_path, 500)}
                        rank={item.vote_average}
                        rate={5}
                        title={item.title}
                        year={item.release_date}
                        id={item.id}
                        key={item.id}
                    />
                </Box>
            }) :
                <Box minHeight={300} position='relative'>
                    <CircularProgress classes={{ root: classes.progress }} />
                </Box>
        }
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
}),
);