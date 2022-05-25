import { Container, Grid } from '@mui/material';
import Review from '../components/Product/Review';
import SwiperGallery from '../components/SwiperGallery/SwiperGallery';

import Section from '../composables/Section';
import Title from '../composables/Title';
import Swiper from '../components/Swiper/Swiper';
import Description from '../components/Product/Description';

const Product = () => {
  return (
    <Section>
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid item md={6} xs={12}>
            <SwiperGallery />
          </Grid>
          <Grid item md={6} xs={12}>
            <Review />
          </Grid>
        </Grid>
      </Container>
      <Description />
      <Title title="Сопутствующие товары" />
      <Swiper />
    </Section>
  );
};

export default Product;
