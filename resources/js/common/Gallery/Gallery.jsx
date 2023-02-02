import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import "./Gallery.less";
import { Banner } from "@/assets/";
const Gallery = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={Banner} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Banner} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Banner} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Banner} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Banner} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Banner} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Banner} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Banner} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Banner} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Gallery;
