import type { NextPage } from 'next';
import ProductCard from '../../components/Elements/ProductCard';
import Layout from '../../components/Layouts';
import Section from '../../components/Layouts/Section';

const Product: NextPage = () => {
  return (
    <Layout>
      <Section>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Product;
