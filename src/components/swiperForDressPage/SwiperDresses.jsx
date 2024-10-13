"use client";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image"; // ייבוא Image
// import required modules
import { Scrollbar } from "swiper/modules";

export default function SwiperDresses({ photoArr = [], numOfSlide }) {
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
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar]}
      slidesPerView={1.3}
      className="mySwiper"
    >
      {photoArr.map((photo, index) => (
        <SwiperSlide key={index}>
          <Image
            src={photo}
            alt={`Photo ${index}`}
            width={450}
            height={250}
            quality={75}
            loading="lazy"
            className="photoForDressOnPage p-1"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const desktop = () => (
    <Swiper
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar]}
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
            loading="lazy"
            className="object-cover w-96 h-96"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
  return <>{isDesktop ? phone() : phone()}</>;
}
