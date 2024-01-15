
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
  SwiperCore.use([Navigation, Scrollbar, Autoplay]);
  return (
    <div className="swiper-container">
      <Swiper
        loop={true} // 슬라이드 루프
        spaceBetween={50} // 슬라이스 사이 간격
        slidesPerView={1} // 보여질 슬라이스 수
        navigation={false} // prev, next button
        autoplay={{
          delay: 2500,
          disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
        }}
      >
       {slideData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.src} alt={slide.alt} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
