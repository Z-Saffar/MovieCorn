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
            <Route path="/search">
                <ResultPage />
            </Route>
            <Route path="/myFavorite">
                <FavoritePage />
            </Route>
            <Route path="/watchlist">
                <WatchListPage />
            </Route>
        </Switch>
    );
}
export default AppRouter