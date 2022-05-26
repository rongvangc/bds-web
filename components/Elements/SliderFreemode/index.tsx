import React, { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper';

interface SliderFreemodeProps {
  children: React.ReactNode[];
}

const SliderFreemode: React.FC<SliderFreemodeProps> = ({ children }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      {children.map((element: React.ReactNode, index: number) => (
        <SwiperSlide key={index}>{element}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default memo(SliderFreemode);
