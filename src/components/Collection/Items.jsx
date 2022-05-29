import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mui/material';

import { fetchItems } from '../../redux/items/itemsSlice';
import Item from './Item';

const Items = () => {
  const items = useSelector(({items}) => items.items)
  const dispatch = useDispatch();
  const { sortBy, gender, compound, country, size } = useSelector(({ filter }) => ({
    sortBy: filter.sortBy,
    gender: filter.gender,
    compound: filter.compound,
    country: filter.country,
    size: filter.size,
  }));
  const getItems = async () => {
    dispatch(
      fetchItems({
        sortBy,
        gender,
        compound,
        country,
        size,
      }),
    );
  };

  React.useEffect(() => {
    getItems();
  }, [sortBy, gender, compound, country, size]);
  return (
    <Grid container spacing={3}>
      {items.map((product) => (
        <Grid item key={product.id} sm={4} xs={6} lg={3}>
          <Item item={product}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default Items;
