import React from "react";
import {
    Route, Switch
} from "react-router-dom";
import FavoritePage from "./containers/favorite-page/FavoritePage";
import HomePage from "./containers/home-page/HomePage";
import ResultPage from "./containers/ResultPage";
import WatchListPage from "./containers/watchList-page/WatchListPage";

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <HomePage />
            </Route>
            <Route path="/search" exact>
                <ResultPage />
            </Route>
            <Route path="/myFavorite" exact>
                <FavoritePage />
            </Route>
            <Route path="/watchlist" exact>
                <WatchListPage />
            </Route>
        </Switch>
    );
}
export default AppRouter