import React from 'react';
import { Typography } from '@mui/material';

import SwiperX from '../Swiper/Swiper';
import Title from '../Title';

const styles = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    mt: '25px',
    fontWeight: 'bold',
  }
};

const Catalog = ({ gender }) => {
  return (
    <section style={styles.section}>
      <Title title={gender}/>
      <Typography variant="span" >
        Новинки
      </Typography>
      <SwiperX />
    </section>
  );
};

export default Catalog;
