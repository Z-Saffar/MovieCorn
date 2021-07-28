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
import { Box, IconButton } from "@material-ui/core"

export interface IMovieCard {
  title: string
  year: number
  rate: number
  genres: string
  description: string
  imageUrl: string
}

const MovieCard: VFC<IMovieCard> = ({
  description,
  genres,
  imageUrl,
  rate,
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
          <Grid item className={classes.imageWrapper}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={imageUrl} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs className={classes.description}>
              <Box textAlign='left'>
                <Typography gutterBottom variant="h5">
                  {title} - ({year})
                </Typography>
              </Box>
              <Box mb={1}>
                <Rating name="read-only" value={4} readOnly />
              </Box>
              <Typography variant="body2" gutterBottom>
                {genres}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {rate}
              </Typography>
              <Box textAlign='left'>
                <Typography variant="body1">{description}</Typography>
              </Box>
            </Grid>
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
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
export default MovieCard

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: "90%",
    },
    imageWrapper: {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
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
    description: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  })
)