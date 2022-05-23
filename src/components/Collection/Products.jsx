import { Grid } from '@mui/material'
import React from 'react'
import Product from './Product'

const Products = () => {
  return (
    <Grid container spacing={3}>
      <Grid item sm={4} xs={6} lg={3}>
        <Product />
      </Grid>
      <Grid item sm={4} xs={6} lg={3}>
        <Product />
      </Grid>
      <Grid item sm={4} xs={6} lg={3}>
        <Product />
      </Grid>
      <Grid item sm={4} xs={6} lg={3}>
        <Product />
      </Grid>
      <Grid item sm={4} xs={6} lg={3}>
        <Product />
      </Grid>
      <Grid item sm={4} xs={6} lg={3}>
        <Product />
      </Grid>
      <Grid item sm={4} xs={6} lg={3}>
        <Product />
      </Grid>
      <Grid item sm={4} xs={6} lg={3}>
        <Product />
      </Grid>
      <Grid item sm={4} xs={6} lg={3}>
        <Product />
      </Grid>
    </Grid>
  )
}

export default Products