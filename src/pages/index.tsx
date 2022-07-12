import todoApi from '../client/todoApiExample';
import type { InferGetServerSidePropsType, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
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

import { GetServerSideProps } from 'next';

import { provinceService } from '@services/index';
import { Province } from '@/types/index';

type HomeProps = {
  provinceList: Province[];
};

const Editor = dynamic(() => import('../components/Elements/Editor'), {
  ssr: false,
});

const Home = ({
  provinceList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await todoApi.getAllTodo();
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTodo();
  }, []);

  return (
    <Layout>
      <Section>
        <Editor id="test" />
      </Section>
      <Section image="/hero.jpg">
        <HeroSection />
      </Section>
      <Section>
        <FilterSection provinceList={provinceList} />
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

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  try {
    const provinceList = await provinceService.getProvinceList();
    return {
      props: {
        provinceList,
      },
    };
  } catch (error) {
    return {
      props: {
        provinceList: [],
      },
    };
  }
};
