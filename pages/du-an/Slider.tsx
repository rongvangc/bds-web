import type { NextPage } from 'next';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import Button from '../../components/Elements/Button';
import Badge from '../../components/Elements/Badge';

const slides = [
  'https://file4.batdongsan.com.vn/2022/05/17/20220517174329-daf0.jpg',
  'https://file4.batdongsan.com.vn/2022/04/25/20220425144400-58f3.jpg',
  'https://file4.batdongsan.com.vn/2022/05/16/20220516104954-8f4f.jpg',
];

const ProductSlider: NextPage = () => {
  const swiper = useSwiper();

  console.log('Pagination', Pagination);

  return (
    <div className="swiper-container relative">
      <Swiper
        pagination={true}
        className="mySwiper"
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      >
        {slides.map((imageUrl: string, index: number) => (
          <SwiperSlide key={index}>
            <div className="w-100 relative h-[420px]">
              <span className="product-image-gradient border-bottom-left-radius-[4px] absolute left-0 bottom-0 z-[1] h-[260px] w-full" />
              <Image
                src={imageUrl || '/default-product-image.png'}
                layout="fill"
                className=" object-cover"
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

      <Button
        size="sm"
        variant="default"
        className="!absolute top-64 left-6 z-10 bg-white hover:bg-gray"
        onClick={() => swiper?.slidePrev()}
      >
        &#171;
      </Button>
      <Button
        size="sm"
        variant="default"
        className=" !absolute top-64 right-6 z-10 bg-white hover:bg-gray"
        onClick={() => swiper?.slideNext()}
      >
        &#187;
      </Button>
    </div>
  );
};

export default ProductSlider;
