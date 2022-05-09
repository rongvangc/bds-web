import type { NextPage } from 'next';
import ProductCard from '../components/Elements/ProductCard';
import Layout from '../components/Layouts';
import Section from '../components/Layouts/Section';

const Home: NextPage = () => {
  return (
    <Layout>
      <Section>
        <div className="grid grid-cols-4 gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Section>
    </Layout>
  );
};

export default Home;
