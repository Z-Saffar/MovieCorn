import { Box, Button, CircularProgress, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import Layout from "./Layout";
import { SentimentVeryDissatisfiedRounded as NoItemIcon } from '@material-ui/icons';
import { useQuery } from 'hooks/useQuery';
import useLazySearchMovie from 'hooks/useSearchMovie';
import { useEffect } from 'react';

const ResultPage = () => {
    const classes = useStyles()
    const query = useQuery();
    const searchText = query.get('q') ?? "";
    const [search, movies, nextPage] = useLazySearchMovie()

    useEffect(() => {
        search(searchText);
    }, [searchText, search]);

    if (!movies) {
        return (
            <Layout withSearchBox={true}>
                <Box minHeight={300} position='relative'>
                    <CircularProgress classes={{ root: classes.progress }} />
                </Box>
            </Layout>
        )
    }

    return (<Layout withSearchBox={true}>
        {
            !movies?.length ?
                <Box className={classes.noItemWrapper}>
                    <NoItemIcon className={classes.noItemIcon} color='error' />
                    <Typography variant='h5'>there is no result</Typography>
                </Box>
                :
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
    loadMore: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(1, 4)
    },
    noItemWrapper: {
        height: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    noItemIcon: {
        width: 48,
        height: 48,
        marginRight: theme.spacing(1)
    }
}),
);