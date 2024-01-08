// "use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CarouselSlider = () => {
    const images = [
        'public/images/banner_001.png',
        'public/images/banner_002.png',
    ];

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 2500 }}
            pagination={{ clickable: true }}
            loop={true}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={image} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
