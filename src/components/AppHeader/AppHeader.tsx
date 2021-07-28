import { Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Bookmark, Favorite } from '@material-ui/icons';
import MoreIcon from '@material-ui/icons/MoreVert';
import React, { VFC } from 'react';
import { ReactComponent as MovieCornIcon } from '../../logo.svg';

interface IAppHeaderProps {
    hasSearchBox: boolean
}
const AppHeader: VFC<IAppHeaderProps> = ({ hasSearchBox }) => {
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id='mobile-menu'
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            classes={{ list: classes.popupList }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Badge badgeContent={4} color="secondary" className={classes.menuIcon}>
                    <Favorite />
                </Badge>
                <Typography>my favorite</Typography>
            </MenuItem>
            <MenuItem>
                <Badge badgeContent={3} color="secondary" className={classes.menuIcon} >
                    <Bookmark />
                </Badge>
                <Typography>watchlist</Typography>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <MovieCornIcon width={46} height={46} className={classes.logo} />
                    <Typography className={classes.title} variant="h6" noWrap>
                        MovieCorn
                    </Typography>

                    <div className={classes.grow}>
                        <Box className={classes.searchBoxWrapper}>
                            {hasSearchBox && <div>search box</div>}
                        </Box>
                    </div>
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show favorite movies" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <Favorite />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show watchlist" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <Bookmark />
                            </Badge>
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls='mobile-menu'
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {mobileMenu}
        </div>
    );
}
export default AppHeader
const useStyles = makeStyles((theme: Theme) => {
    const { breakpoints: { up }, spacing } = theme
    return createStyles({
        grow: {
            flexGrow: 1,
        },
        logo: {
            margin: spacing(1)
        },
        searchBoxWrapper: {
            margin: spacing(0, 1),
            [up('sm')]: {
                margin: spacing(0, 4)
            },
            [up('md')]: {
                margin: spacing(0, 8)
            },
            [up('lg')]: {
                margin: spacing(0, 16)
            }
        },

        menuButton: {
            marginRight: spacing(2),
        },
        title: {
            display: 'none',
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
            padding: 0
        },
        menuIcon: {
            margin: spacing(1, 1.5, 1, 0)
        }

    });
},
);