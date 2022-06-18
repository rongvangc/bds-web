import React from 'react';
import Image from 'next/image';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import IconList from '../../../icons';
import { Colors } from '../../../utils/types';
import Heading from '../../Elements/Heading';

const PARTNER_IMAGE = [
  {
    id: '1',
    thumbnail: '/partner-1.jpg',
  },
  {
    id: '2',
    thumbnail: '/partner-2.jpg',
  },
  {
    id: '3',
    thumbnail: '/partner-3.jpg',
  },
  {
    id: '4',
    thumbnail: '/partner-4.jpg',
  },
  {
    id: '5',
    thumbnail: '/partner-5.jpg',
  },
  {
    id: '6',
    thumbnail: '/partner-6.jpg',
  },
];

const PartnerSection: React.FC = () => {
  return (
    <>
      <div className="flex items-center">
        <Heading title="Đối tác của" />
        <div className="mb-1 ml-3">
          <Image
            src="/logo-color.png"
            width={140}
            height={40}
            objectFit="contain"
            alt=""
          />
        </div>
      </div>
      <div className="swiper-container relative">
        <Swiper
          modules={[Navigation, A11y]}
          navigation={{
            prevEl: '.prvBtn',
            nextEl: '.nextBtn',
          }}
          slidesPerView={6}
          spaceBetween={15}
          loop
        >
          {PARTNER_IMAGE.map((imageUrl) => (
            <SwiperSlide key={imageUrl.id}>
              <div className="my-2 flex items-center justify-center rounded-lg py-2 shadow">
                <Image
                  src={imageUrl.thumbnail || '/default-product-image.png'}
                  width="100%"
                  height="100px"
                  layout="intrinsic"
                  objectFit="contain"
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-11 flex w-full justify-between">
          <div className="prvBtn absolute -left-12 cursor-pointer rounded-md p-1 shadow-md hover:bg-gray">
            <IconList type="arrow-left" size="md" color={Colors.black} />
          </div>
          <div className="nextBtn absolute -right-12 cursor-pointer rounded-md p-1 shadow-md hover:bg-gray">
            <IconList type="arrow-right" size="md" color={Colors.black} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerSection;
