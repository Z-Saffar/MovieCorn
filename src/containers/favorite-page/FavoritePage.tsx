import Layout from "../Layout"
import FavoriteList from "./FavoriteList"

const FavoritePage = () => {
    return (<Layout withSearchBox={true}>
        <FavoriteList />
    </Layout>)
}
export default FavoritePage