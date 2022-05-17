import type { NextPage } from 'next';
import ProductCard from '../components/Elements/ProductCard';
import Layout from '../components/Layouts';
import Section from '../components/Layouts/Section';
import HeroSection from '../components/Layouts/Section/HeroSection';

const Home: NextPage = () => {
  return (
    <Layout>
      <Section className="bg-black/50">
        <HeroSection />
      </Section>
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
