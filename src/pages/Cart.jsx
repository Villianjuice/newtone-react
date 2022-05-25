import React from 'react';
import { Grid } from '@mui/material';

import Section from '../composables/Section';
import Title from '../composables/Title';
import CartItem from '../components/Cart/CartItem';
import Checkout from '../components/Cart/Сheckout';

const Cart = () => {
  return (
    <Section>
      <Title title="Корзина" />
      <Grid container spacing={5}>
        <Grid item xs={12} lg={8}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </Grid>

        <Grid item xs={12} lg={4}>
          <Checkout />
        </Grid>
      </Grid>
    </Section>
  );
};

export default Cart;
