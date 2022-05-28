import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './SwiperGallery.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';

export default function SwiperGallery({ swiperTopWidth, images }) {
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
        {images &&
          images.map((image) => (
            <SwiperSlide key={Math.random() * 0.5}>
              <img src={image.imageUrl} alt={image.imageUrl} />
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper">
        {images &&
          images.map((image) => (
            <SwiperSlide key={Math.random() * 0.5}>
              <img src={image.imageUrl} alt={image.imageUrl} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
