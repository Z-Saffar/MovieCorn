import { Box } from '@material-ui/core'
import Layout from 'containers/Layout'

import FavoriteList from './FavoriteList'

const FavoritePage = () => {
  return (
    <Layout withSearchBox={true}>
      <Box mt={9}>
        <FavoriteList />
      </Box>
    </Layout>
  )
}
export default FavoritePage
