import { Box, Rating, Typography, Button } from '@mui/material';
import React from 'react';

import ButtonX from '../../composables/Button';

const styles = {
  title: { color: 'primary.dark', fontSize: 24, fontWeight: '600', fontFamily: 'Jost' },
  price: { color: 'primary.dark', fontSize: 32, fontWeight: 'bold', fontFamily: 'PTRootUI' },
  size: { color: 'primary.dark', fontSize: 32, fontWeight: 'bold', fontFamily: 'PTRootUI' },
};

const Review = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 350,
        justifyContent: 'space-between',
      }}>
      <Box sx={{ display: 'flex' }}>
        <Rating name="half-rating" defaultValue={3.3} precision={0.1} readOnly />
        <Typography>(0)</Typography>
      </Box>
      <Typography sx={styles.title}>Повседневная хлопковая футболка</Typography>
      <Typography sx={styles.price}>990.00 ₽</Typography>
      <Box>
        <Typography sx={{mb: 1}}>Размер</Typography>
        <Box>
          <Button sx={{ minWidth: '14px', mr: 1 }}>X</Button>
          <Button sx={{ minWidth: '14px', mr: 1 }}>X</Button>
          <Button sx={{ minWidth: '14px', mr: 1 }}>X</Button>
          <Button sx={{ minWidth: '14px', mr: 1 }}>X</Button>
        </Box>
      </Box>
      <ButtonX>В корзину</ButtonX>
    </Box>
  );
};

export default Review;
