import React, { useState, VFC, useCallback } from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import ButtonBase from "@material-ui/core/ButtonBase"
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded'
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import Rating from '@material-ui/lab/Rating';
import { Box, Hidden, IconButton } from "@material-ui/core"

export interface MovieCardProps {
  title: string
  year: Date
  rate: number
  rank: number
  description: string
  imageUrl: string
}

const MovieCard: VFC<MovieCardProps> = ({
  description,
  imageUrl,
  rate,
  rank,
  title,
  year,
}) => {
  const classes = useStyles()
  const [isFavorite, setIsFavorite] = useState(false)
  const [isInWatchList, setIsInWatchList] = useState(false)

  const handleFavorite = useCallback(() => {
    setIsFavorite(!isFavorite)
  }, [isFavorite])
  const handleWatchList = useCallback(() => {
    setIsInWatchList(!isInWatchList)
  }, [isInWatchList])

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Hidden mdUp>
            <Grid item className={classes.imageWrapper}>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={imageUrl} />
              </ButtonBase>
              <div className={classes.iconButtons}>
                <IconButton onClick={handleFavorite}>
                  {isFavorite ? <FavoriteRoundedIcon color='secondary' /> :
                    <FavoriteBorderRoundedIcon color='secondary' />}
                </IconButton>
                <IconButton onClick={handleWatchList}>
                  {isInWatchList ? <BookmarkRoundedIcon color='primary' /> :
                    <BookmarkBorderRoundedIcon color='primary' />}
                </IconButton>
              </div>
            </Grid>
          </Hidden>
          <Grid item xs={12} sm container>
            <Hidden smDown>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={imageUrl} />
                </ButtonBase>
              </Grid>
            </Hidden>
            <Grid item xs className={classes.description}>
              <Box textAlign='left'>
                <Typography gutterBottom variant="h5">
                  {title} - ({new Date(year).getFullYear()})
                </Typography>
                <Rating name="read-only" value={rate} readOnly />
                <Typography variant="body2" color="textSecondary">
                  {rank}
                </Typography>
              </Box>
              <Box textAlign='justify' mt={2}>
                <Typography variant="body1">{description}</Typography>
              </Box>
            </Grid>
            <Hidden smDown>
              <Grid item>
                <IconButton onClick={handleFavorite}>
                  {isFavorite ? <FavoriteRoundedIcon color='secondary' /> :
                    <FavoriteBorderRoundedIcon color='secondary' />}
                </IconButton>
                <IconButton onClick={handleWatchList}>
                  {isInWatchList ? <BookmarkRoundedIcon color='primary' /> :
                    <BookmarkBorderRoundedIcon color='primary' />}
                </IconButton>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
export default MovieCard

const useStyles = makeStyles((theme: Theme) => {
  const { spacing, breakpoints: { up } } = theme
  return createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: spacing(2),
      margin: "auto",
      marginTop: spacing(1),
      maxWidth: "90%",
    },
    imageWrapper: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    image: {
      width: 250,
      height: 250,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    iconButtons: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      right: 0,
      top: 0,
      [up('sm')]: {
        flexDirection: 'row'
      }
    },
    description: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  })
}
)