"use client"
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./Swiper.css";

const arrImage = [
  "8D8F5314-13E7-42E0-81A9-F5790339DC18_result.webp",

];

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SwiperForBest() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isDesktop ? (
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {arrImage.map((shoe, index) => (
            <SwiperSlide key={index}>
              <img
                src={shoe}
                alt=""
                className="image object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          slidesPerView={1.3}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {arrImage.map((watch, index) => (
            <SwiperSlide key={index}>
              <img
                src={watch}
                alt=""
                className="image h-64 w-96 object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}