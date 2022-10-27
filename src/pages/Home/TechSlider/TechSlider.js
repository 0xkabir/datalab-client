import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./TechSlider.css";

import { EffectCoverflow, Pagination } from "swiper";

import excel from './excel.png'
import powerBI from './powerBI.png'
import statistics from './statistics.png'
import python from './python.png'
import pandas from './pandas.png'
import numpy from './numpy.png'
import matplotlib from './matplotlib.png'
import mysql from './mysql.png'

const TechSlider = () => {
    return (
        <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={excel} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={powerBI} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={statistics} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={python} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={numpy} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={pandas} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={matplotlib} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={mysql} alt=""/>
        </SwiperSlide>
      </Swiper>
    </>
    );
};

export default TechSlider;