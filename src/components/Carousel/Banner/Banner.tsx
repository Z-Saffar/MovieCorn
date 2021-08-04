import { Card, CardMedia, createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { VFC } from "react";

export type BannerItemType = {
    title: string, imageUrl: string, isVideo?: boolean
}
interface Props {
    items: BannerItemType[]
}
const Banner: VFC<Props> = ({ items }) => {
    const classes = useStyles()
    let bannerItems = [];


    for (const item of items) {

        const media = (
            <Grid item xs={12} sm={6} lg={4} key={item.title}>
                <CardMedia
                    className={classes.Media}
                    image={item.imageUrl}
                    title={item.title}
                />
            </Grid>
        )
        bannerItems.push(media);
    }


    return (
        <Card raised className={classes.Banner}>
            <Grid container spacing={0} className={classes.BannerGrid}>
                {bannerItems}
            </Grid>
        </Card>
    )
}
export default Banner


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        Banner: {
            height: 400,
            position: 'relative'
        },
        Media: {
            backgroundColor: 'white',
            height: '100%',
            overflow: 'hidden',
            position: 'relative',
            transition: '300ms',
            cursor: 'pointer',
            '&:hover': {
                filter: 'brightness(115%)'
            }
        },
        BannerGrid:
        {
            height: '100%',
            position: 'relative'
        }
    })
)

