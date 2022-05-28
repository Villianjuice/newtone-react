import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import Product from './Product';

const Products = () => {
  const items = useSelector(({items}) => items.items)
  return (
    <Grid container spacing={3}>
      {items.map((product) => (
        <Grid item key={product.id} sm={4} xs={6} lg={3}>
          <Product item={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
