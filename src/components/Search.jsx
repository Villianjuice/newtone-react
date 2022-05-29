import { Autocomplete, Stack, TextField } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const styles = {
  Stack: { width: 550, background: '#434343', display: {xs: 'none', sm: 'block'} }

}

const Search = () => {
  const items = useSelector(({items}) => items.items)
  const [searchValue, setSearchValue] = React.useState([])
  React.useEffect(() => {
    setSearchValue(items)
  }, [items])
  return (
    <Stack spacing={2} sx={styles.Stack} >
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      options={searchValue && searchValue.map((option) => option.title)}
      renderInput={(params) => <TextField {...params} label="Поиск" />}
      
    />
  </Stack>
  )
}

export default Search