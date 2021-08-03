import {
  Box,
  Hidden,
  IconButton,
  Paper,
  Grid,
  ButtonBase,
  Typography,
} from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  BookmarkBorderRounded,
  BookmarkRounded,
  StarRounded,
  FavoriteBorderRounded,
  FavoriteRounded,
} from '@material-ui/icons'
import { FAVORITE_LIST, WATCH_LIST } from 'constant/constant'
import { useFavoriteContext } from 'context/favorite.context'
import { useWatchListContext } from 'context/watchList.context'
import { getAbsoluteImageURL } from 'helper'
import React, { useCallback, useEffect, useState, VFC } from 'react'

import { MovieCardProps, StoredData } from './types'

const MovieCard: VFC<MovieCardProps> = ({ item }) => {
  const { description, imageUrl, imageWidth, rank, title, year, id } = item

  const classes = useStyles()
  const [isFavorite, setIsFavorite] = useState(false)
  const [isInWatchList, setIsInWatchList] = useState(false)
  const { setFavoriteContextList, favoriteContextList } = useFavoriteContext()
  const { setWatchListInContext, watchListInContext } = useWatchListContext()
  const imageSrc = !!imageUrl
    ? getAbsoluteImageURL(imageUrl, imageWidth)
    : process.env.PUBLIC_URL + '/images/noImage.png'

  const handleFavorite = useCallback(() => {
    const existingFavorite: StoredData = JSON.parse(
      localStorage.getItem(FAVORITE_LIST) ?? '{}'
    )

    const existItem = Object.keys(existingFavorite).includes(id.toString())
    let newFavoriteMap: StoredData
    if (existItem) {
      const { [id]: _, ...rest } = existingFavorite
      newFavoriteMap = { ...rest }
    } else {
      newFavoriteMap = { ...existingFavorite, [id]: { ...item } }
    }
    setFavoriteContextList(newFavoriteMap)
    localStorage.setItem(FAVORITE_LIST, JSON.stringify(newFavoriteMap))
    setIsFavorite(!isFavorite)
  }, [id, isFavorite, item, setFavoriteContextList])

  const handleWatchList = useCallback(() => {
    const existingWatchList: StoredData = JSON.parse(
      localStorage.getItem(WATCH_LIST) ?? '{}'
    )
    const existItem = Object.keys(existingWatchList).includes(id.toString())

    let newWatchListMap: StoredData
    if (existItem) {
      const { [id]: _, ...rest } = existingWatchList
      newWatchListMap = { ...rest }
    } else {
      newWatchListMap = { ...existingWatchList, [id]: { ...item } }
    }

    setWatchListInContext(newWatchListMap)
    localStorage.setItem(WATCH_LIST, JSON.stringify(newWatchListMap))

    setIsInWatchList(!isInWatchList)
  }, [id, isInWatchList, item, setWatchListInContext])

  useEffect(() => {
    const existFavItem = Object.keys(favoriteContextList).includes(id.toString())
    if (existFavItem) {
      setIsFavorite(true)
    }
    const existWatchItem = Object.keys(watchListInContext).includes(id.toString())
    if (existWatchItem) {
      setIsInWatchList(true)
    }
  }, [favoriteContextList, id, watchListInContext])

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Hidden mdUp>
            <Grid item className={classes.imageWrapper}>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt={title} src={imageSrc} />
              </ButtonBase>
              <div className={classes.iconButtons}>
                <IconButton onClick={handleFavorite}>
                  {isFavorite ? (
                    <FavoriteRounded color="secondary" />
                  ) : (
                    <FavoriteBorderRounded color="secondary" />
                  )}
                  <Typography variant="srOnly">Favorite</Typography>
                </IconButton>
                <IconButton onClick={handleWatchList}>
                  {isInWatchList ? (
                    <BookmarkRounded color="primary" />
                  ) : (
                    <BookmarkBorderRounded color="primary" />
                  )}
                  <Typography variant="srOnly">Watch list</Typography>
                </IconButton>
              </div>
            </Grid>
          </Hidden>
          <Grid item xs={12} sm container>
            <Hidden smDown>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt={title} src={imageSrc} />
                </ButtonBase>
              </Grid>
            </Hidden>
            <Grid item xs className={classes.description}>
              <Box textAlign="left">
                <Typography gutterBottom variant="h5">
                  {title} - ({new Date(year).getFullYear()})
                </Typography>
                <Box display="flex" alignItems="flex-end">
                  <StarRounded classes={{ root: classes.starIcon }} />
                  <Typography variant="body2" color="textSecondary">
                    {rank}
                  </Typography>
                </Box>
              </Box>
              <Box textAlign="left" mt={2}>
                <Typography variant="body1">{description}</Typography>
              </Box>
            </Grid>
            <Hidden smDown>
              <Grid item>
                <IconButton onClick={handleFavorite}>
                  {isFavorite ? (
                    <FavoriteRounded color="secondary" />
                  ) : (
                    <FavoriteBorderRounded color="secondary" />
                  )}
                  <Typography variant="srOnly">Favorite</Typography>
                </IconButton>
                <IconButton onClick={handleWatchList}>
                  {isInWatchList ? (
                    <BookmarkRounded color="primary" />
                  ) : (
                    <BookmarkBorderRounded color="primary" />
                  )}
                  <Typography variant="srOnly">Watch list</Typography>
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

const useStyles = makeStyles(
  (theme: Theme) => {
    const {
      spacing,
      breakpoints: { up },
    } = theme
    return createStyles({
      root: {
        flexGrow: 1,
      },
      paper: {
        padding: spacing(2),
        margin: 'auto',
        marginTop: spacing(1),
        maxWidth: '90%',
      },
      imageWrapper: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      },
      image: {
        width: 250,
        height: 250,
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
      iconButtons: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        right: 0,
        top: 0,
        [up('sm')]: {
          flexDirection: 'row',
        },
      },
      description: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      starIcon: {
        fill: '#fcd202',
        marginRight: spacing(0.5),
      },
    })
  },
  { name: 'MovieCard' }
)
