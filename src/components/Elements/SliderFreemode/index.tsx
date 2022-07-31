import React, { memo, ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode } from 'swiper';

interface SliderFreemodeProps {
  children: ReactNode[];
}

const SliderFreemode: React.FC<SliderFreemodeProps> = ({ children }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      modules={[FreeMode]}
      className="project-swiper"
    >
      {children.map((element: ReactNode, index: number) => (
        <SwiperSlide key={index}>{element}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default memo(SliderFreemode);
