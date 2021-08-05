import {
    Box, CardMedia,
    Chip, createStyles, Grid, makeStyles, Theme, Typography,
    Divider
} from "@material-ui/core"
import { getAbsoluteImageURL } from "helper"
import { VFC } from "react"
import { MovieDetails } from "types/types"

const MovieDetail: VFC<MovieDetails> = (props) => {
    const classes = useStyles()
    const { poster_path, title, overview, genres, production_companies,
        production_countries,
        runtime, spoken_languages, release_date
    } = props

    const imageSrc = !!poster_path
        ? getAbsoluteImageURL(poster_path, 500)
        : process.env.PUBLIC_URL + '/images/noImage.png'

    const moreDetails = [{
        title: 'Production Company',
        description: production_companies?.[0]?.name
    },
    {
        title: 'Production Country',
        description: production_countries?.[0]?.name
    },
    {
        title: 'Spoken Language',
        description: spoken_languages?.name || '---'
    },
    {
        title: 'Released date',
        description: release_date
    },

    {
        title: 'Number of played',
        description: runtime
    }
    ]

    return (
        <Box mt={10} >
            <Grid container >
                <Grid item xs={12} container>
                    <Grid item xs={12} md={4}>
                        <Box className={classes.imageWrapper}>
                            <CardMedia
                                className={classes.media}
                                image={imageSrc}
                                title={title}
                            />
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
                                        return <>
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
                                        </>
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
            height: 'calc(100vh - 70px)',
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
