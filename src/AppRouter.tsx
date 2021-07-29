import React from "react";
import {
    Route, Switch
} from "react-router-dom";
import FavoriteList from "./containers/FavoriteList";
import HomePage from "./containers/home-page/HomePage";
import ResultPage from "./containers/ResultPage";
import WatchList from "./containers/WatchList";

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <HomePage />
            </Route>
            <Route path="/result" exact>
                <ResultPage />
            </Route>
            <Route path="/myFavorite" exact>
                <FavoriteList />
            </Route>
            <Route path="/watchlist" exact>
                <WatchList />
            </Route>
        </Switch>
    );
}
export default AppRouter