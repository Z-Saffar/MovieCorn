import React from "react";
import {
    Route, Switch
} from "react-router-dom";
import AppHeader from "./components/AppHeader/AppHeader";
import FavoriteList from "./containers/FavoriteList";
import HomePage from "./containers/HomePage";
import ResultPage from "./containers/ResultPage";
import WatchList from "./containers/WatchList";

const AppRouter = () => {
    return (

        <Switch>
            <Route path="/" exact>
                <>
                    <AppHeader hasSearchBox={false} />
                    <HomePage />
                </>
            </Route>
            <Route path="/result" exact>
                <>
                    <AppHeader hasSearchBox={true} />
                    <ResultPage />
                </>
            </Route>
            <Route path="/myFavorite" exact>
                <>
                    <AppHeader hasSearchBox={true} />
                    <FavoriteList />
                </>
            </Route>
            <Route path="/watchlist" exact>
                <>
                    <AppHeader hasSearchBox={true} />
                    <WatchList />
                </>
            </Route>
        </Switch>

    );
}
export default AppRouter