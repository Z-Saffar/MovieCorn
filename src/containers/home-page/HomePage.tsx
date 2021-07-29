import { Box, createStyles, Grid, makeStyles, Theme } from "@material-ui/core"
import Carousel from "../../components/Carousel/Carousel"
import SearchBox from "../../components/SearchBox/SearchBox"
import Layout from "../Layout"
import { useTopRated } from "./hooks/useTopRated"

const HomePage = () => {
    const classes = useStyles()
    const { topRateData } = useTopRated();
    console.log("🦎 ~ HomePage ~ topRateData", topRateData)

    return (
        <Layout withSearchBox={false}>
            <Carousel items={topRateData} />
            <div className={classes.searchWrapper}>
                <Box className={classes.searchInnerWrapper}>
                    <SearchBox />
                </Box>
            </div>
        </Layout>
    )
}
export default HomePage

const useStyles = makeStyles((theme: Theme) => {
    const { spacing, breakpoints: { up }, palette } = theme
    return createStyles({
        searchWrapper: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
        },
        searchInnerWrapper: {
            border: '1px solid',
            borderRadius: spacing(0.5),
            borderColor: palette.grey[500],
            width: '100%',
            padding: spacing(1, 0),
            [up('md')]: {
                width: '80%'
            },
            [up('lg')]: {
                width: '70%'
            }
        }
    })
}
);