import {
    Box, CardMedia,
    Chip, createStyles, Divider, Grid, makeStyles, Theme, Typography
} from "@material-ui/core"
import Loading from "components/Loading"
import { useMovieTrailer } from "containers/detail-page/hooks/useMovieTrailer"
import { VFC } from "react"
import { MovieDetails } from "types/types"

const MovieDetail: VFC<MovieDetails> = (props) => {
    const classes = useStyles()
    const { data, loading, error } = useMovieTrailer()

    const { title, overview, genres, production_companies,
        production_countries,
        runtime, spoken_languages, release_date
    } = props

    const moreDetails = [{
        title: 'Production Company',
        description: production_companies?.[0]?.name || '---'
    },
    {
        title: 'Production Country',
        description: production_countries?.[0]?.name || '---'
    },
    {
        title: 'Spoken Language',
        description: spoken_languages?.name || '---'
    },
    {
        title: 'Released date',
        description: release_date || '---'
    },

    {
        title: 'Number of played',
        description: runtime || '---'
    }
    ]

    return (
        <Box mt={10} >
            <Grid container >
                <Grid item xs={12} container>
                    <Grid item xs={12} md={4}>
                        <Box className={classes.imageWrapper}>
                            {loading && <Loading />}
                            {data ?
                                <CardMedia component='iframe'
                                    width={300}
                                    height={400}
                                    src={`https://youtube.com/embed/${data.key}`}
                                    allowFullScreen
                                /> :
                                error && <Typography variant='h5'>{error}</Typography>
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8} container>
                        <Grid item xs={12}>
                            <Box ml={4} >
                                {genres?.map((item) => {
                                    return <Chip label={item.name}
                                        key={item.id}
                                        color='primary'
                                        classes={{ root: classes.chip }}
                                    />
                                })}
                                <Box>
                                    <Typography variant='h4' color='textPrimary'>{title}</Typography>
                                </Box>
                                <Typography className={classes.overview}>{overview}</Typography>
                                {
                                    moreDetails.map((item) => {
                                        return <div key={item.title}>
                                            <Box mt={2} mb={2}>
                                                <Divider />
                                            </Box>
                                            <Grid container className={classes.moreDetail}>
                                                <Grid item xs={12} md={3}>
                                                    <Typography variant='h6' color='primary' >{item.title}</Typography>
                                                </Grid>
                                                <Grid item xs={12} md='auto'>
                                                    <Typography className={classes.moreDetailDescription}>{item.description}</Typography>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    })
                                }
                            </Box>
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>

        </Box>
    )
}
export default MovieDetail

const useStyles = makeStyles((theme: Theme) => {
    const { spacing, palette } = theme
    return createStyles({
        media: {
            backgroundColor: 'inherit',
            backgroundSize: 'contain',
            height: '100%',
            overflow: 'hidden',
            position: 'relative',
            transition: '300ms',
            cursor: 'pointer',
            '&:hover': {
                filter: 'brightness(115%)',
            }
        },
        imageWrapper: {
            position: 'relative'
        },
        overview: {
            color: palette.grey[50],
            marginTop: spacing(3)
        },
        chip: {
            padding: spacing(0, 2),
            margin: spacing(4, 1)
        },
        moreDetail: {
            color: palette.grey[50],
            display: 'flex',
            alignItems: 'center'
        },
        moreDetailDescription: {
            marginLeft: spacing(3)
        }
    })
}
)
