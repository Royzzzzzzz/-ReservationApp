import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import "swiper/swiper-bundle.min.css";

export default function AdCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      <SwiperSlide>
        <img src="/images/banner_001.png" alt="Ad 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/banner_002.png" alt="Ad 2" />
      </SwiperSlide>
    </Swiper>
  );
}
