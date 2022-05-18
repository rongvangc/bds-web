import type { NextPage } from 'next';
import ProductItem from '../../components/Elements/ProductItem';
import Layout from '../../components/Layouts';
import Section from '../../components/Layouts/Section';

const Product: NextPage = () => {
  return (
    <Layout>
      <Section>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Product;
