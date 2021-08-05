import {
    Box, Card, CardMedia,
    createStyles,
    Grid, makeStyles, Theme, alpha,
    Typography
} from "@material-ui/core";
import { VFC } from "react";

export interface BannerItemType {
    title: string
    imageUrl: string
}
export interface BannerProps {
    items: BannerItemType[]
}
const Banner: VFC<BannerProps> = ({ items }) => {
    const classes = useStyles()
    return (
        <Card raised className={classes.banner}>
            <Grid container spacing={0} className={classes.bannerGrid}>
                {items?.map((item) => {
                    return <Grid item xs={12} sm={6} lg={4} key={item.title} className={classes.root}>

                        <CardMedia
                            className={classes.media}
                            image={item.imageUrl}
                            title={item.title}
                        />
                        <Box className={classes.title}>
                            <Typography variant='h5'>{item.title}</Typography>

                        </Box>

                    </Grid>
                })}
            </Grid>
        </Card>
    )
}
export default Banner


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'relative',
            '&:hover': {
                '& $title': {
                    display: 'block'
                }
            }
        },
        banner: {
            height: 400,
            position: 'relative'
        },
        media: {
            backgroundColor: 'white',
            height: '100%',
            overflow: 'hidden',
            position: 'relative',
            transition: '300ms',
            cursor: 'pointer',
            '&:hover': {
                filter: 'brightness(115%)',
            }
        },
        bannerGrid:
        {
            height: '100%',
            position: 'relative'
        },
        title: {
            position: 'absolute',
            bottom: 0,
            padding: theme.spacing(1),
            backgroundColor: alpha(theme.palette.common.black, 0.60),
            width: '100%',
            display: 'none',

        }
    })
)

