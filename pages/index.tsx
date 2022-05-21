import type { NextPage } from 'next';
import ProductCard from '../components/Elements/ProductCard';
import Layout from '../components/Layouts';
import Section from '../components/Layouts/Section';
import FilterSection from '../components/Layouts/Section/FilterSection';
import HeroSection from '../components/Layouts/Section/HeroSection';
import HotProject from '../components/Layouts/Section/HotProject';
import PostSection from '../components/Layouts/Section/PostSection';
import ProjectForYou from '../components/Layouts/Section/ProjectForYou';
import ProjectRent from '../components/Layouts/Section/ProjectRent';

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
        <PostSection />
      </Section>
      <Section className="bg-lightGray">
        <ProjectForYou />
      </Section>
      <Section>
        <HotProject />
      </Section>
      <Section className="bg-lightGray">
        <ProjectRent />
      </Section>
    </Layout>
  );
};

export default Home;
