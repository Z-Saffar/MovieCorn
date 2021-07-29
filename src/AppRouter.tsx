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
            <Route path="/">
                <>
                    <AppHeader hasSearchBox={false} />
                    <HomePage />
                </>
            </Route>
            <Route path="/result">
                <>
                    <AppHeader hasSearchBox={true} />
                    <ResultPage />
                </>
            </Route>
            <Route path="/myFavorite">
                <>
                    <AppHeader hasSearchBox={true} />
                    <FavoriteList />
                </>
            </Route>
            <Route path="/watchlist">
                <>
                    <AppHeader hasSearchBox={true} />
                    <WatchList />
                </>
            </Route>
        </Switch>

    );
}
export default AppRouter