import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const slideData = [
  {
    id: 1,
    src: "/images/banner_001.png",
    alt: "Ad 1",
  },
  {
    id: 2,
    src: "/images/banner_002.png",
    alt: "Ad 2",
  },
];
export default function AdCarousel() {
  return (
    <div className="swiper-container">
      <Swiper
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        navigation={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.src} alt={slide.alt} style={{ width: "100%" }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
