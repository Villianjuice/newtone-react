import { Box, Rating, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonX from '../../composables/Button';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/cartSlice';

const styles = {
  title: { color: 'primary.dark', fontSize: 24, fontWeight: '600', fontFamily: 'Jost' },
  price: { color: 'primary.dark', fontSize: 32, fontWeight: 'bold', fontFamily: 'PTRootUI' },
  size: { color: 'primary.dark', fontSize: 32, fontWeight: 'bold', fontFamily: 'PTRootUI' },
};

const Review = ({ item }) => {
  const itemsInCart = useSelector(({ cart }) => cart.itemsInCart);
  const dispatch = useDispatch();

  const isItemInCart = itemsInCart.some((itemInCart) => itemInCart.id === item.id);

  const handleClick = () => {
    if (isItemInCart) {
      dispatch(deleteItemFromCart(item.id));
    } else {
      dispatch(setItemInCart(item));
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 250,
        justifyContent: 'space-between',
      }}>
      <Box sx={{ display: 'flex' }}>
        <Rating
          name="half-rating-read"
          value={item.raiting ? item.raiting : 0}
          precision={0.1}
          readOnly
        />
        <Typography>{item.raiting}</Typography>
      </Box>
      <Typography sx={styles.title}>{item.title}</Typography>
      <Typography sx={styles.price}>{item.price} ₽</Typography>
      <ButtonX onClick={handleClick} secondary={isItemInCart ? true : false}>
        {isItemInCart ? 'Убрать из корзины' : 'В корзину'}
      </ButtonX>
    </Box>
  );
};

export default Review;
