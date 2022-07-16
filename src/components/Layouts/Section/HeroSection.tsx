import React from 'react';
import { SearchIcon } from '../../../icons';
import { Colors } from '../../../utils/types';

const HeroSection = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="py-28 text-white">
        <h1 className="ct-heading mb-2 text-5xl uppercase ">Tìm kiếm nơi</h1>
        <h2 className="ct-heading mb-2 inline-block bg-white py-2 px-6 text-8xl uppercase text-primary">
          “An Cư”
        </h2>
        <h4 className="mb-6 text-4xl">tiếp theo của bạn...</h4>
        <a
          className="w-m mb-8 inline-flex items-center rounded-full bg-tertiary py-1.5 pr-4 pl-2 font-bold"
          href=""
        >
          <div className="pr-1">
            <SearchIcon width={28} height={28} color={Colors.white} />
          </div>
          <span className="text-xl font-bold uppercase">Tìm kiếm ngay</span>
        </a>
        <div className="flex">
          <div className="mr-8 flex w-28 flex-col items-center justify-center text-center">
            <p className="ct-heading mb-2 text-6xl">
              2k<span className="text-tertiary">+</span>
            </p>
            <p className="text-xl font-light text-gray">Sản phẩm giá tốt</p>
          </div>
          <div className="flex w-28 flex-col  items-center justify-center text-center">
            <p className="ct-heading mb-2 text-6xl">
              5k<span className="text-tertiary">+</span>
            </p>
            <p className="text-xl font-light text-gray">Khách hàng ghé thăm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
