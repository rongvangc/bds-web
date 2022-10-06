import type { NextPage } from 'next';
import Layout from '../components/Layouts';
import Section from '../components/Layouts/Section';
import ContactMailSection from '../components/Layouts/Section/ContactMailSection';
import FilterSection from '../components/Layouts/Section/FilterSection';
import HeroSection from '../components/Layouts/Section/HeroSection';
import HotProject from '../components/Layouts/Section/HotProject';
import PartnerSection from '../components/Layouts/Section/PartnerSection';
import PostSection from '../components/Layouts/Section/PostSection';
import ProjectForYou from '../components/Layouts/Section/ProjectForYou';
import ProjectRent from '../components/Layouts/Section/ProjectRent';
import WhySection from '../components/Layouts/Section/WhySection';

// import dynamic from 'next/dynamic';

// const Editor = dynamic(() => import('../components/Elements/Editor'), {
//   ssr: false,
// });

const Home: NextPage = () => {
  return (
    <Layout>
      {/* <Section>
        <Editor id="test" />
      </Section> */}
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
      <Section>
        <WhySection />
      </Section>
      <Section image="/contact.jpg">
        <ContactMailSection />
      </Section>
      <Section>
        <PartnerSection />
      </Section>
    </Layout>
  );
};

export default Home;