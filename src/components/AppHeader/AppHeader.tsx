import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  Box,
  Typography,
  MenuItem,
  Menu,
  Badge,
  AppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core'
import { Bookmark, Favorite, MoreVert } from '@material-ui/icons'
import IconButtonRouter from 'components/IconButtonRouter'
import SearchBox from 'components/SearchBox'
import { useFavoriteContext } from 'context/favorite.context'
import { useWatchListContext } from 'context/watchList.context'
import React, { useState, VFC } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ReactComponent as MovieCornIcon } from '../../logo.svg'

interface IAppHeaderProps {
  hasSearchBox: boolean
}
const AppHeader: VFC<IAppHeaderProps> = ({ hasSearchBox }) => {
  const classes = useStyles()
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(
    null
  )
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
  const { favoriteContextList } = useFavoriteContext()
  const { watchListInContext } = useWatchListContext()
  const { push } = useHistory()
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const mobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id="mobile-menu"
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      classes={{ list: classes.popupList }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem
        onClick={() => {
          push('/myFavorite')
        }}
      >
        <Badge
          badgeContent={Object.keys(favoriteContextList).length}
          color="secondary"
          className={classes.menuIcon}
        >
          <Favorite />
        </Badge>
        <Typography>My favorite</Typography>
      </MenuItem>
      <MenuItem
        onClick={() => {
          push('/watchlist')
        }}
      >
        <Badge
          badgeContent={Object.keys(watchListInContext).length}
          color="secondary"
          className={classes.menuIcon}
        >
          <Bookmark />
        </Badge>
        <Typography>Watchlist</Typography>
      </MenuItem>
    </Menu>
  )

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" classes={{ root: classes.appBar }}>
        <Toolbar className={classes.logoWrapper}>
          <Link to="/">
            <Box display="flex" alignItems="center">
              <MovieCornIcon width={46} height={46} className={classes.logo} />
              <Typography className={classes.title} variant="h6" noWrap>
                MovieCorn
              </Typography>
            </Box>
          </Link>
          <div className={classes.grow}>
            <Box className={classes.searchBoxWrapper}>
              {hasSearchBox && <SearchBox />}
            </Box>
          </div>
          <div className={classes.sectionDesktop}>
            <IconButtonRouter
              aria-label="show favorite movies"
              to="/myFavorite"
              className={classes.IconButton}
            >
              <Badge
                badgeContent={Object.keys(favoriteContextList).length}
                color="secondary"
              >
                <Favorite />
              </Badge>
            </IconButtonRouter>
            <IconButtonRouter
              aria-label="show watchlist"
              to="/watchlist"
              className={classes.IconButton}
            >
              <Badge
                badgeContent={Object.keys(watchListInContext).length}
                color="secondary"
              >
                <Bookmark />
              </Badge>
            </IconButtonRouter>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls="mobile-menu"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MoreVert />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {mobileMenu}
    </div>
  )
}
export default AppHeader

const useStyles = makeStyles((theme: Theme) => {
  const {
    breakpoints: { up },
    spacing,
    palette,
  } = theme
  return createStyles({
    grow: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: theme.palette.common.black,
      borderBottom: `3px solid ${theme.palette.primary.main}`,
    },
    logoWrapper: {
      '& a': {
        textDecoration: 'none',
      },
    },
    logo: {
      margin: spacing(1),
    },
    searchBoxWrapper: {
      margin: spacing(0, 1),
      [up('sm')]: {
        margin: spacing(0, 4),
      },
      [up('md')]: {
        margin: spacing(0, 8),
      },
      [up('lg')]: {
        margin: spacing(0, 16),
      },
    },

    menuButton: {
      marginRight: spacing(2),
    },
    title: {
      display: 'none',
      color: palette.grey[100],
      textDecoration: 'none',
      [up('sm')]: {
        display: 'block',
      },
    },
    sectionDesktop: {
      display: 'none',
      [up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [up('md')]: {
        display: 'none',
      },
    },
    popupList: {
      padding: 0,
    },
    menuIcon: {
      margin: spacing(1, 1.5, 1, 0),
    },
    IconButton: {
      color: palette.common.white,
    },
  })
})
