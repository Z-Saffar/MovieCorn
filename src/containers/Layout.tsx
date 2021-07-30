import { Container, Grid } from "@material-ui/core"
import { FC } from "react"
import AppHeader from "../components/AppHeader/AppHeader"
import { FavoriteProvider } from "../context/favorite.context"
import { WatchListProvider } from "../context/watchList.context"


const Layout: FC<{ withSearchBox: boolean }> = ({ children, withSearchBox = false }) => {
    const favoriteList = JSON.parse(localStorage.getItem("favoriteList") ?? '[]')
    const watchList = JSON.parse(localStorage.getItem("watchList") ?? '[]')

    return (
        <FavoriteProvider value={{
            favoriteContextList: favoriteList,
            setFavoriteContextList: () => { }
        }}>
            <WatchListProvider value={{
                watchListInContext: watchList,
                setWatchListInContext: () => { }
            }}>
                <AppHeader hasSearchBox={withSearchBox} />
                <Grid container justifyContent='center'>
                    <Grid item xs={10} >
                        {children}
                    </Grid>
                </Grid>
            </WatchListProvider>
        </FavoriteProvider>
    )
}
export default Layout