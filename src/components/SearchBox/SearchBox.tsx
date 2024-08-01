import { TextField } from '@mui/material'
import { ChangeEvent } from 'react'
import { IconButton } from '@mui/material'

interface SearchBoxProps {
  setSearchPhrase: (searchPhrase: string) => void
}

export const SearchBox = ({ setSearchPhrase }: SearchBoxProps) => (
  <form>
    <TextField
      id="search-bar"
      className="text"
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setSearchPhrase(e.target.value)
      }}
      label="Search by phrase"
      variant="outlined"
      placeholder="Search..."
      size="medium"
    />
    <IconButton type="submit" aria-label="search">
      {/* <SearchIcon style={{ fill: 'blue' }} /> */}
      <p>Find</p>
    </IconButton>
  </form>
)
