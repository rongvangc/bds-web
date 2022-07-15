import React, { useState } from 'react';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { A11y, FreeMode, Navigation, Thumbs } from 'swiper';
import IconList from '@/icons';
import { Colors } from '@/utils/types';

interface ThumbsGalleryProps {
  images: string[];
}

const ThumbsGallery: React.FC<ThumbsGalleryProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <>
      <div className="swiper-container relative">
        <Swiper
          modules={[FreeMode, Navigation, Thumbs, A11y]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper?.destroyed ? thumbsSwiper : null,
          }}
          navigation={{
            prevEl: '.prvBtn',
            nextEl: '.nextBtn',
          }}
          loop
          className="overflow-hidden rounded-md"
        >
          {images.map((image, i) => (
            <SwiperSlide key={i}>
              <div className="flex items-center justify-center rounded-lg shadow">
                <Image
                  src={image || '/default-product-image.png'}
                  width={800}
                  height={400}
                  layout="fixed"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-44 flex w-full justify-between">
          <div className="prvBtn absolute left-4 z-10 cursor-pointer rounded-md bg-white p-1 shadow-md hover:bg-gray">
            <IconList type="arrow-left" size="md" color={Colors.black} />
          </div>
          <div className="nextBtn absolute right-4 z-10 cursor-pointer rounded-md bg-white p-1 shadow-md hover:bg-gray">
            <IconList type="arrow-right" size="md" color={Colors.black} />
          </div>
        </div>
      </div>
      <div className="">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode]}
          className="mt-2 h-32"
        >
          {images.map((image, i) => (
            <SwiperSlide key={i}>
              <Image
                src={image}
                key={image}
                layout="fill"
                className="rounded-md"
                objectFit="cover"
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ThumbsGallery;
