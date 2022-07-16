import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/Layouts';
import Section from '../components/Layouts/Section';
import ThumbsGallery from '../components/Elements/ThumbsGallery';
import Breadcrumb from '../components/Elements/Breadcrumb';
import DetailContent from '../components/Elements/DetailContent';
import RealEstateFeatures from '../components/Elements/RealEstateFeatures';
import RealEstateMap from '../components/Elements/RealEstateMap';
import KeyWords from '../components/Elements/KeyWords';
import ProductDeliveryInfo from '../components/Elements/ProductDeliveryInfo';
import RealEstateRecommend from '../components/Elements/RealEstateRecommend';
import BoxInfoOwner from '@/components/Elements/BoxInfoOwner';

const mockImages = [
  '/demo/project.jpg',
  '/demo/project-2.jpg',
  '/demo/project-3.jpg',
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
          <div className="col-span-2">
            <ThumbsGallery images={mockImages} />

            <div className="mt-4">
              <Breadcrumb data={mockDataBreadcrumb} />
            </div>

            <DetailContent />

            <div className="mt-8">
              <span className="sub-title-1">Đặc điểm bất động sản</span>
              <span className="note">Loại tin đăng: Bán đất</span>
            </div>

            <RealEstateFeatures />

            <RealEstateMap />

            <KeyWords />

            <ProductDeliveryInfo />

            <RealEstateRecommend />
          </div>
          <div className="col-span-1">
            <BoxInfoOwner />

            <div className="box bg-[#f2f2f2]"></div>
            <div className="box bg-[#f2f2f2]"></div>
            <div className="box bg-[#f2f2f2]"></div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Product;
