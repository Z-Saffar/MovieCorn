import {
  Box,
  CircularProgress,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'

const Loading = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <CircularProgress classes={{ root: classes.progress }} />
    </Box>
  )
}
export default Loading

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      minHeight: 400,
    },
    progress: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      margin: 'auto',
    },
  })
)
