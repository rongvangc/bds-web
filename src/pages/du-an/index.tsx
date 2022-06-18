import SliderProject from '@/components/Layouts/Section/SlideProject';
import type { NextPage } from 'next';
import ProductItem from '../../components/Elements/ProductItem';
import ProductPostItem from '../../components/Elements/ProductPostItem';
import Layout from '../../components/Layouts';
import Section from '../../components/Layouts/Section';

const Product: NextPage = () => {
  return (
    <Layout>
      <Section>
        <SliderProject />
      </Section>
      <Section>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
          <div className="col-span-1">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-lg font-semibold">Tin tức dự án</p>
              <a
                href="./tin-tuc-thi-truong"
                className="cursor-pointer font-medium text-red"
              >
                Xem tất cả &#8594;
              </a>
            </div>
            <ProductPostItem />
            <ProductPostItem />
            <ProductPostItem />
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Product;
