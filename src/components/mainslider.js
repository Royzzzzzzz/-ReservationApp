import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ImageSlider = ({ images }) => {
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
                    <img src={image} alt={`Slide ${index}`} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ImageSlider;
