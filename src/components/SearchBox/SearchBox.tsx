import {
  alpha,
  createStyles,
  IconButton,
  InputBase,
  makeStyles,
  Theme,
} from '@material-ui/core'
import { SearchRounded as SearchIcon } from '@material-ui/icons'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SearchBox = () => {
  const [searchText, setSearchText] = useState<string>()
  const { push } = useHistory()
  const classes = useStyles()

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault()
    push(`/search?q=${searchText}`)
  }

  return (
    <form onSubmit={handleSearch} data-testid='searchForm' className={classes.root}>
      <div className={classes.search}>
        <InputBase
          defaultValue=''
          name="search-box"
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
        <IconButton type="submit" color="inherit" aria-label="search" onClick={handleSearch}>
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
    root: {
      backgroundColor: palette.grey[900]
    },
    search: {
      position: 'relative',
      display: 'flex',
      borderRadius: shape.borderRadius,
      backgroundColor: alpha(palette.common.white, 0.15),
      color: palette.common.white,
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
  })
})
