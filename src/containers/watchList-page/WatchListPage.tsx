import { Box } from "@material-ui/core"
import Layout from "../Layout"
import WatchList from "./WatchList"

const WatchListPage = () => {
    return (<Layout withSearchBox={true}>
        <Box mt={9}>
            <WatchList />
        </Box>
    </Layout>)
}
export default WatchListPage