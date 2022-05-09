import type { NextPage } from 'next';
import Layout from '../components/Layouts';
import Section from '../components/Layouts/Section';

const Custom500: NextPage = () => {
  return (
    <Layout title="500">
      <Section>
        <h1>500 - Server-side error occurred</h1>;
      </Section>
    </Layout>
  );
};

export default Custom500;
