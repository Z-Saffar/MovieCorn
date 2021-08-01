import { alpha, createStyles, IconButton, InputBase, makeStyles, Theme } from '@material-ui/core';
import { SearchRounded as SearchIcon } from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router-dom';

const SearchBox = () => {
    const [searchText, setSearchText] = React.useState<string>();
    const { push } = useHistory()
    const classes = useStyles()
    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        push(`/search?q=${searchText}`)
    }
    return (
        <form onSubmit={handleSearch}>
            <div className={classes.search} >
                <InputBase
                    name='search-box'
                    placeholder="Search movies …"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchText}
                    onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
                        setSearchText(value)
                    }}
                />
                <IconButton type="submit"
                    color='inherit'
                    aria-label="search">
                    <SearchIcon />
                </IconButton>
            </div>
        </form>
    )
}
export default SearchBox
const useStyles = makeStyles((theme: Theme) => {
    const { spacing, palette, shape } = theme
    return createStyles({
        search: {
            position: 'relative',
            display: 'flex',
            borderRadius: shape.borderRadius,
            backgroundColor: alpha(palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: alpha(palette.common.white, 0.25),
            },
            width: '100%',
        },
        inputRoot: {
            color: 'inherit',
            width: '100%',
        },
        inputInput: {
            padding: spacing(1, 1, 1, 4),
            width: '100%',
        },
    });
},
);