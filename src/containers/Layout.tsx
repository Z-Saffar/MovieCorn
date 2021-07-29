import { Container, Grid } from "@material-ui/core"
import { FC } from "react"
import AppHeader from "../components/AppHeader/AppHeader"


const Layout: FC<{ withSearchBox: boolean }> = ({ children, withSearchBox = false }) => {
    return (
        // <Container maxWidth='lg'>
        <>
            <AppHeader hasSearchBox={withSearchBox} />
            <Grid container justifyContent='center'>
                <Grid item xs={10} >
                    {children}
                </Grid>

            </Grid>
        </>
        // </Container>




    )
}
export default Layout