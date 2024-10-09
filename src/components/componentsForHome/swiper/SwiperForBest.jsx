"use client";
// import Image from "next/image";
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

const photoArr = [
  "/Dress project/HomePage/8D8F5314-13E7-42E0-81A9-F5790339DC18_result.webp",
  "/Dress project/HomePage/A9E2B6A2-4258-4DA2-A12A-77E61ABC8CA6_result.webp",
  "/Dress project/HomePage/bc8b97f0-0317-483e-9b2d-095834c5c3f4_result.webp",
  "/Dress project/HomePage/DDA2E815-31DB-4C16-BFA7-04017958D577_result.webp",
  "/Dress project/HomePage/IMG_4725_result.webp",
  "/Dress project/HomePage/IMG_4788_result.webp",
  "/Dress project/HomePage/IMG_4901_result.webp",
  "/Dress project/HomePage/IMG_5413_result.webp",
  "/Dress project/HomePage/IMG_5778_result.webp",
];

export default function App() {
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
      slidesPerView={2}
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
      // navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {photoArr.map((photo, index) => (
        <SwiperSlide key={index}>
          <img
            src={photo}
            alt={`Photo ${index}`}
            width={300}
            height={300}
            quality={75}
            loading="lazy"
            className="object-cover w-96 h-96"
          ></img>
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
      // navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {photoArr.map((photo, index) => (
        <SwiperSlide key={index}>
          <img
            src={photo}
            alt={`Photo ${index}`}
            width={500}
            height={500}
            quality={75}
            loading="lazy"
            className="object-cover w-96 h-96"
          ></img>
        </SwiperSlide>
      ))}
    </Swiper>
  );
  return (
    <>
      {isDesktop ? desktop() : phone()}
    </>
  );
}
