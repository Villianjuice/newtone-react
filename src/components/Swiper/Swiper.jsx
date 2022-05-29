import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import './swiper.css';

import woman1 from '../../assets/img/woman1.jpg';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ImgDialog from '../Dialog/ImgDialog'

const styles = {
  slide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    m: '10px 0',
    height: 55,
    display: 'flex',
    alignItems: 'center',
  },
  price: {
    fontWeight: 'bold',
  },
  swiper: {
    margin: '20px 0',
  },
};
const breakpoints = {
  0: { slidesPerView: 2 },
  992: { slidesPerView: 3 },
  1200: { slidesPerView: 5 },
};

const SwiperX = ({ items }) => {
  const nav = useNavigate();

  return (
    <Swiper
      style={styles.swiper}
      modules={[Navigation]}
      navigation
      spaceBetween={15}
      breakpoints={breakpoints}>
      {items &&
        items.map((item) => (
          <SwiperSlide key={item.id} style={styles.slide}>
            <ImgDialog item={item} />
            <Typography onClick={() => nav(`/product/${item.id}`)} variant="span" sx={styles.title}>
              {item.title}
            </Typography>
            <Typography variant="span" sx={styles.price}>
              {item.price} ₽
            </Typography>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SwiperX;
