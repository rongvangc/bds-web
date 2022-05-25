import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/Layouts';
import Section from '../components/Layouts/Section';
import FilterSection from '../components/Layouts/Section/FilterSection';
import ThumbsGallery from '../components/Elements/ThumbsGallery';

const mockImages = [
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-2.jpg',
  'https://swiperjs.com/demos/images/nature-3.jpg',
  'https://swiperjs.com/demos/images/nature-4.jpg',
  'https://swiperjs.com/demos/images/nature-5.jpg',
  'https://swiperjs.com/demos/images/nature-6.jpg',
  'https://swiperjs.com/demos/images/nature-7.jpg',
  'https://swiperjs.com/demos/images/nature-8.jpg',
  'https://swiperjs.com/demos/images/nature-9.jpg',
  'https://swiperjs.com/demos/images/nature-10.jpg',
];

const Product: NextPage = () => {
  return (
    <Layout>
      <Section>
        <div className="grid grid-cols-3 gap-4">
          <div className="... col-span-2">
            <ThumbsGallery images={mockImages} />

            <div className="mt-4">
              Bán / Hòa Bình / Lương Sơn / Bán đất tại xả Cư Yên
            </div>

            <div className="mt-4">
              <h2 className="text-4xl font-medium leading-tight">
                Bán khuôn viên sẵn nhà sàn gỗ chắc chắn đất đẹp giá đẹp, thuộc
                Lương Sơn Hòa Bình
              </h2>
            </div>

            <div className="border-slate-200 mt-4 border-y py-4">
              <div className="flex gap-4">
                <div>
                  <span className="sub-title">Mức giá</span>
                  <span className="sub-value">Thỏa thuận</span>
                </div>
                <div>
                  <span className="sub-title">Diện tích</span>
                  <span className="sub-value">4625 m²</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <span className="sub-value">Thông in mô tả</span>
              <div className="mt-4">
                - Lô đất có tổng DT 4625m2 có 400m2 đất ở, nằm giữa thủ phủ nghỉ
                <br />
                dưỡng của Lương Sơn, Hoà Bình. <br />
                - Trên đất có sẵn nhà sàn gỗ chắc chắn, có nhà xây nhỏ xinh.
                <br />
                - Khuôn viên được phủ xanh với nhiều loại cây xanh và cây ăn
                quả. <br />
                - Có hòn non bộ và bể bơi, ranh giới pháp lý rõ ràng. <br />
                - Thế đất thoải nhẹ được chủ nhân bày trí thiết kế rất hài hoà
                mang lại không gian xanh và phong thuỷ vô cùng ấm cúng và bình
                an. <br />
                - Cách HN chỉ 35km, TT Lương Sơn 3km, đường to thông thoáng.
                <br />
                - Đ/c: Cư Yên - Lương Sơn <br />
                - Hoà Bình. - Liên hệ để được tư vấn gặp chủ nhà vui tính và
                nhận về ngay lô đất đẹp này. <br />
                <div>Hotline: 0969622791</div>
              </div>
            </div>
          </div>
          <div className="...">06</div>
        </div>
      </Section>
    </Layout>
  );
};

export default Product;
