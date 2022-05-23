import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import woman2 from '../../assets/img/woman2.jpg';

const styles = {
  box: {display: 'flex', flexDirection: 'column', alignItems: 'center'},
  img: {cursor: 'pointer', width: '100%'},
  desc: {m: '20px 6px 10px', textAlign: 'center', display: 'block'}
}

const Product = () => {
  return (
    <Box sx={styles.box}>
      <img src={woman2} alt="woman" style={styles.img}/>
      <Link to="/">
        <Typography sx={styles.desc} color="primary.main">Повседневная хлопковая футболка</Typography>
      </Link>
      <Typography sx={{fontWeight:'bold'}}>990 ₽</Typography>
    </Box>
  );
};

export default Product;
