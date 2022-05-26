import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/Layouts';
import Section from '../components/Layouts/Section';
import ThumbsGallery from '../components/Elements/ThumbsGallery';
import Breadcrumb from '../components/Elements/Breadcrumb';
import DetailContent from '../components/Elements/DetailContent';

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
const mockDataBreadcrumb = [
  {
    name: 'Bán',
    link: '',
  },
  {
    name: 'Hòa Bình',
    link: '',
  },
  {
    name: 'Lương Sơn',
    link: '',
  },
  {
    name: 'Bán đất tại xả Cư Yên',
    link: '',
  },
];

const Product: NextPage = () => {
  return (
    <Layout>
      <Section>
        <div className="grid grid-cols-3 gap-4">
          <div className="... col-span-2">
            <ThumbsGallery images={mockImages} />

            <div className="mt-4">
              <Breadcrumb data={mockDataBreadcrumb} />
            </div>

            <DetailContent />
          </div>
          <div className="...">06</div>
        </div>
      </Section>
    </Layout>
  );
};

export default Product;
