import React from 'react';
import { Typography } from '@mui/material';

import SwiperX from '../Swiper/Swiper';
import Title from '../../composables/Title';
import axios from 'axios';

const styles = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    mt: '25px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
};

const CatalogWoman = ({ gender }) => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    async function fetchItem() {
      try {
        const { data } = await axios.get(
          `https://628f6d170e69410599dc2f20.mockapi.io/items?sex=0&page=1&limit=10`,
        );
        setItems(data);
      } catch (error) {
        alert('Ошибка!');
      }
    }
    fetchItem();
  }, []);
  return (
    <section style={styles.section}>
      <Title title={gender} />
      <Typography variant="span">Новинки</Typography>
      {items && <SwiperX items={items} />}
    </section>
  );
};

export default CatalogWoman;
