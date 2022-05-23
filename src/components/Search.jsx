import { Autocomplete, Stack, TextField } from '@mui/material'
import React from 'react'

const styles = {
  Stack: { width: 550, background: '#434343' }
}

const Search = () => {
  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 }
  ]
  return (
    <Stack spacing={2} sx={styles.Stack} >
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      options={top100Films.map((option) => option.title)}
      renderInput={(params) => <TextField {...params} label="freeSolo" />}
    />
  </Stack>
  )
}

export default Search