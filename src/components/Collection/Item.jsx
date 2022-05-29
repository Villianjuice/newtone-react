import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import ImgDialog from '../Dialog/ImgDialog';

const styles = {
  box: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  img: { cursor: 'pointer', width: '100%' },
  desc: { m: '20px 6px 10px', textAlign: 'center', display: 'block' },
};

const Item = ({ item }) => {
  return (
    <Box sx={styles.box}>
      <ImgDialog item={item}/>
      <Link to={`/product/${item.id}`}>
        <Typography sx={styles.desc} color="primary.main">
          {item.title}
        </Typography>
      </Link>
      <Typography sx={{ fontWeight: 'bold' }}>{item.price} ₽</Typography>
    </Box>
  );
};

export default Item;
