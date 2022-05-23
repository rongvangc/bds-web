import type { NextPage } from 'next';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import Badge from '../../components/Elements/Badge';
import IconList from '../../icons';
import { Colors } from '../../utils/types';

const slides = [
  'https://file4.batdongsan.com.vn/2022/05/17/20220517174329-daf0.jpg',
  'https://file4.batdongsan.com.vn/2022/04/25/20220425144400-58f3.jpg',
  'https://file4.batdongsan.com.vn/2022/05/16/20220516104954-8f4f.jpg',
];

const ProductSlider: NextPage = () => {
  return (
    <div className="swiper-container relative">
      <Swiper
        slidesPerView={1}
        modules={[Navigation, A11y]}
        navigation={{
          prevEl: '.prvBtn',
          nextEl: '.nextBtn',
        }}
        loop
        className="mb-10 overflow-hidden rounded-md"
      >
        {slides.map((imageUrl: string, index: number) => (
          <SwiperSlide key={index}>
            <div className="relative h-[420px] w-full overflow-hidden rounded-md">
              <span className="product-image-gradient border-bottom-left-radius-[4px] absolute left-0 bottom-0 z-[1] h-[260px] w-full" />
              <Image
                src={imageUrl || '/default-product-image.png'}
                layout="fill"
                objectFit="cover"
                alt=""
              />
              <div className="absolute bottom-10 left-20 right-20 z-10">
                <Badge
                  className="bg-lightGreen text-sm text-black"
                  text={
                    <>
                      <span className="font-semibold">Đang mở bán</span> ·{' '}
                      <span>
                        30/04 khai trương tiện ích và tiến hành mở bán
                      </span>
                    </>
                  }
                />
                <p className="mt-4 text-2xl font-medium	text-white">
                  The Empire Vinhomes Ocean Park
                </p>
                <p className="ont-medium text-lg	text-white opacity-95">
                  Xã Long Hưng, Huyện Văn Giang, Hưng Yên
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="bott absolute top-[190px] flex w-full justify-between">
        <div className="prvBtn absolute -left-12 cursor-pointer rounded-md p-1 shadow-md hover:bg-gray">
          <IconList type="arrow-left" size="md" color={Colors.black} />
        </div>
        <div className="nextBtn absolute -right-12 cursor-pointer rounded-md p-1 shadow-md hover:bg-gray">
          <IconList type="arrow-right" size="md" color={Colors.black} />
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
