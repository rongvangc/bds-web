import type { NextPage } from 'next';
import ProductCard from '../components/Elements/ProductCard';
import Layout from '../components/Layouts';
import Section from '../components/Layouts/Section';
import FilterSection from '../components/Layouts/Section/FilterSection';
import HeroSection from '../components/Layouts/Section/HeroSection';

const Home: NextPage = () => {
  return (
    <Layout>
      <Section image="/hero.jpg">
        <HeroSection />
      </Section>
      <Section>
        <FilterSection />
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
