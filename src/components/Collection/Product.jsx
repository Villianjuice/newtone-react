import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


import ImgDialog from '../Dialog/ImgDialog';

const styles = {
  box: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  img: { cursor: 'pointer', width: '100%' },
  desc: { m: '20px 6px 10px', textAlign: 'center', display: 'block' },
};

const Product = () => {
  return (
    <Box sx={styles.box}>
      <ImgDialog  />
      <Link to="/">
        <Typography sx={styles.desc} color="primary.main">
          Повседневная хлопковая футболка
        </Typography>
      </Link>
      <Typography sx={{ fontWeight: 'bold' }}>990 ₽</Typography>
    </Box>
  );
};

export default Product;
