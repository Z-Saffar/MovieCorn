import { Box, createStyles, makeStyles, Theme, Typography } from '@material-ui/core'
import { SentimentVeryDissatisfiedRounded as NoItemIcon } from '@material-ui/icons'
import { VFC } from 'react'

export interface NoItemProps {
  text: string
}

const NoItem: VFC<NoItemProps> = ({ text }) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <NoItemIcon className={classes.noItemIcon} color="error" />
      <Typography variant="h5">{text}</Typography>
    </Box>
  )
}
export default NoItem

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 400,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.grey[100],
    },
    noItemIcon: {
      width: 48,
      height: 48,
      marginRight: theme.spacing(1),
    },
  })
)
