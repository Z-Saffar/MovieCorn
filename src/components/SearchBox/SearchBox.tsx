import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { InputBase, makeStyles, Theme, createStyles, alpha } from '@material-ui/core';

const SearchBox = () => {
    const classes = useStyles()
    return (
        <div className={classes.search} >
            <div className={classes.searchIcon} >
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    )
}
export default SearchBox
const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            width: '100%',
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
            width: '100%',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: theme.spacing(6),
            width: '100%',
        },

    }),
);