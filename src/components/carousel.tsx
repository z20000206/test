import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { FreeMode, Thumbs, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import c1 from "../assets/images/carousel/carousel1.png";
import c2 from "../assets/images/carousel/carousel2.png";
import c3 from "../assets/images/carousel/carousel3.png";
import c4 from "../assets/images/carousel/carousel4.png";
import c5 from "../assets/images/carousel/carousel5.png";
import c6 from "../assets/images/carousel/carousel6.png";
import c7 from "../assets/images/carousel/carousel7.png";
import c8 from "../assets/images/carousel/carousel8.png";

const images = [c1, c2, c3, c4, c5, c6, c7, c8];

function Carousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <section className="c-carousel">
      <div className="c-carousel__inner">
        <div className="c-carousel__top">
          <Swiper
            modules={[FreeMode, Thumbs, Autoplay]}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            loop={true}
            autoplay={{
              delay: 3000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true, 
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                centeredSlides: false,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 20,
              },
            }}
            className="c-carousel__swiper-main"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="c-carousel__slide">
                  <img
                    src={img}
                    alt={`NIKKE scene ${idx + 1}`}
                    className="c-carousel__img"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="c-carousel__bottom">
          <Swiper
            modules={[FreeMode, Thumbs]}
            onSwiper={setThumbsSwiper}
            watchSlidesProgress
            loop={true}
            spaceBetween={12}
            slidesPerView="auto"
            centerInsufficientSlides={true}
            className="c-carousel__swiper-thumbs"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <button type="button" className="c-carousel__thumb">
                  <img
                    src={img}
                    alt={`NIKKE thumb ${idx + 1}`}
                    className="c-carousel__thumb-img"
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
