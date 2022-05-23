import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import './swiper.css';

import woman1 from '../../assets/img/woman1.jpg';
import { Typography } from '@mui/material';

const styles = {
  slide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    m: '10px 0',
  },
  price: {
    fontWeight: 'bold',
  },
  swiper: {
    margin: '20px 0'
  }
};
const breakpoints = {0: { slidesPerView: 2 }, 992: { slidesPerView: 3 }, 1200: { slidesPerView: 5 }}

const SwiperX = () => {
  return (
    <Swiper
      style={styles.swiper}
      modules={[Navigation]}
      navigation
      spaceBetween={15}
      breakpoints={breakpoints}>
      <SwiperSlide style={styles.slide}>
        <img src={woman1} alt="" />
        <Typography variant="span" sx={styles.title}>
          Хлопковая рубашка в полоску
        </Typography>
        <Typography variant="span" sx={styles.price}>
          3 590 ₽
        </Typography>
      </SwiperSlide>
      <SwiperSlide style={styles.slide}>
        <img src={woman1} alt="" />
        <Typography variant="span" sx={styles.title}>
          Хлопковая рубашка в полоску
        </Typography>
        <Typography variant="span" sx={styles.price}>
          3 590 ₽
        </Typography>
      </SwiperSlide>
      <SwiperSlide style={styles.slide}>
        <img src={woman1} alt="" />
        <Typography variant="span" sx={styles.title}>
          Хлопковая рубашка в полоску
        </Typography>
        <Typography variant="span" sx={styles.price}>
          3 590 ₽
        </Typography>
      </SwiperSlide>
      <SwiperSlide style={styles.slide}>
        <img src={woman1} alt="" />
        <Typography variant="span" sx={styles.title}>
          Хлопковая рубашка в полоску
        </Typography>
        <Typography variant="span" sx={styles.price}>
          3 590 ₽
        </Typography>
      </SwiperSlide>
      <SwiperSlide style={styles.slide}>
        <img src={woman1} alt="" />
        <Typography variant="span" sx={styles.title}>
          Хлопковая рубашка в полоску
        </Typography>
        <Typography variant="span" sx={styles.price}>
          3 590 ₽
        </Typography>
      </SwiperSlide>
      <SwiperSlide style={styles.slide}>
        <img src={woman1} alt="" />
        <Typography variant="span" sx={styles.title}>
          Хлопковая рубашка в полоску
        </Typography>
        <Typography variant="span" sx={styles.price}>
          3 590 ₽
        </Typography>
      </SwiperSlide>
      <SwiperSlide style={styles.slide}>
        <img src={woman1} alt="" />
        <Typography variant="span" sx={styles.title}>
          Хлопковая рубашка в полоску
        </Typography>
        <Typography variant="span" sx={styles.price}>
          3 590 ₽
        </Typography>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperX;
