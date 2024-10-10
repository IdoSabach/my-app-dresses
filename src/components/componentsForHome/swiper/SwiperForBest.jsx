"use client";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image"; // ייבוא Image

export default function App( {photoArr = [], numOfSlide} ) {
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

  const phone = () => (
    <Swiper
      grabCursor={true}
      slidesPerView={numOfSlide}
      spaceBetween={10}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {photoArr.map((photo, index) => (
        <SwiperSlide key={index}>
          <Image
            src={photo}
            alt={`Photo ${index}`}
            width={300}
            height={300}
            quality={75}
            // loading="lazy"
            className="object-cover w-96 h-96"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const desktop = () => (
    <Swiper
      grabCursor={true}
      slidesPerView={4}
      spaceBetween={10}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {photoArr.map((photo, index) => (
        <SwiperSlide key={index}>
          <Image
            src={photo}
            alt={`Photo ${index}`}
            width={500}
            height={500}
            quality={75}
            // loading="lazy"
            className="object-cover w-96 h-96"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return <>{isDesktop ? desktop() : phone()}</>;
}
