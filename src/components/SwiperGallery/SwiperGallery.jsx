import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import woman1 from '../../assets/img/woman1.jpg';
import woman2 from '../../assets/img/woman1-2.jpg';
import woman3 from '../../assets/img/woman1-3.jpg';
import woman4 from '../../assets/img/woman1-4.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './SwiperGallery.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';

export default function SwiperGallery({ swiperTopWidth }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          width: swiperTopWidth,
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2">
        <SwiperSlide >
          <img src={woman1} alt="woman" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={woman2} alt="woman" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={woman3} alt="woman" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={woman4} alt="woman" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper">
        <SwiperSlide >
          <img src={woman1} alt="woman" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={woman2} alt="woman" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={woman3} alt="woman" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={woman4} alt="woman" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
