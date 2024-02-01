import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
export default function BaseSlider(props) {
  return (
    <div className="">
      <Swiper
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
          1200: {
            slidesPerView: props.slide,
          },
          992: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          500: {
            slidesPerView: 1,
          },
        }}
      >
        {props.children}
      </Swiper>
    </div>
  );
}
