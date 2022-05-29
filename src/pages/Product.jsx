import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import Review from '../components/Product/Review';
import SwiperGallery from '../components/SwiperGallery/SwiperGallery';

import Section from '../composables/Section';
import Title from '../composables/Title';
import Swiper from '../components/Swiper/Swiper';
import Description from '../components/Product/Description';

const Product = () => {
  const [item, setItem] = React.useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchItem() {
      try {
        const { data } = await axios.get('https://628f6d170e69410599dc2f20.mockapi.io/items/' + id);
        setItem(data);
      } catch (error) {
        alert('Ошибка!');
        // navigate('/');
      }
    }

    fetchItem();
  }, [id]);

  return (
    <Section>
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid item md={7} xs={12}>
            {item ? <SwiperGallery images={item.images} swiperTopWidth="80%" /> : 'Loading'}
          </Grid>
          <Grid item md={5} xs={12}>
            <Review item={item} />
          </Grid>
        </Grid>
      </Container>
      <Description {...item}/>
      <Title title="Сопутствующие товары" />
      <Swiper />
    </Section>
  );
};

export default Product;
