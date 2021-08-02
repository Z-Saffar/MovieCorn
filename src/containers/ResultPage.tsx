import {
  Box,
  Button,
  CircularProgress,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core'
import MovieCard from 'components/MovieCard'
import NoItem from 'components/NoItem'
import { useQuery } from 'hooks/useQuery'
import useLazySearchMovie from 'hooks/useSearchMovie'
import { useEffect, useRef, useState } from 'react'
import { MovieResult } from './home-page/types'
import Layout from './Layout'

const ResultPage = () => {
  const classes = useStyles()
  const query = useQuery()
  const searchText = query.get('q') ?? ''
  const [search, { data, loading }] = useLazySearchMovie()
  const [pageIndex, setPageIndex] = useState(1)
  const [movies, setMovies] = useState<MovieResult[]>();

  const searchTextRef = useRef(searchText)

  useEffect(() => {
    if (searchText !== searchTextRef.current) {
      setMovies(undefined)
      searchTextRef.current = searchText;
    } else {
      search(searchText, pageIndex)
    }
  }, [searchText, search, pageIndex])

  useEffect(() => {
    if (data?.length) {
      setMovies((prev) => [...(prev ?? []), ...(data ?? [])])
    }
  }, [data])

  const handlePageIndex = () => {
    setPageIndex(pageIndex + 1)
  }
  if (loading && !movies) {
    return (
      <Layout withSearchBox={true}>
        <Box minHeight={300} position="relative">
          <CircularProgress classes={{ root: classes.progress }} />
        </Box>
      </Layout>
    )
  }
  return (
    <Layout withSearchBox={true}>
      {!movies?.length ? (
        <NoItem text='There is No result' />
      ) : (
        <Box mt={10} mb={10} textAlign="center">
          {movies?.map((item) => {
            return (
              <MovieCard
                key={item.id}
                item={
                  {
                    description: item.overview,
                    imageUrl: item.poster_path,
                    imageWidth: 500,
                    rank: item.vote_average,
                    title: item.title,
                    year: item.release_date,
                    id: item.id,
                  }
                }

              />
            )
          })}
          <Box className={classes.loadMoreWrapper}>
            <Button
              variant="contained"
              color="primary"
              className={classes.loadMore}
              onClick={handlePageIndex}
              disabled={loading}

            >
              Load more ...
            </Button>
            {loading && <CircularProgress size={16} className={classes.buttonProgress} />}
          </Box>
        </Box>
      )}
    </Layout>
  )
}
export default ResultPage

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
    loadMoreWrapper: {
      position: 'relative',
      width: 'fit-content',
      margin: 'auto'
    },
    loadMore: {
      marginTop: theme.spacing(3),
      padding: theme.spacing(1, 4),
    },
    buttonProgress: {
      position: 'absolute',
      top: '58%',
      right: '10px',
      color: theme.palette.grey[800]

    }
  })
)
