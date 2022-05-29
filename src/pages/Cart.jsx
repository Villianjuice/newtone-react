import React from 'react';
import { Grid } from '@mui/material';

import Section from '../composables/Section';
import Title from '../composables/Title';
import CartItem from '../components/Cart/CartItem';
import Checkout from '../components/Cart/Сheckout';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector(({ cart }) => cart.itemsInCart);
  return (
    <Section>
      <Title title="Корзина" />
      {cartItems.length ? (
        <Grid container spacing={5}>
          <Grid item xs={12} lg={8}>
            {cartItems.map((cartItem) => (
              <CartItem item={cartItem} />
            ))}
          </Grid>

          <Grid item xs={12} lg={4} >
            <Checkout />
          </Grid>
        </Grid>
      ) : (
        'Ваша корзина пуста'
      )}
    </Section>
  );
};

export default Cart;
