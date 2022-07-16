import type { NextPage } from 'next';
import Layout from '../components/Layouts';
import Section from '../components/Layouts/Section';

const Custom404: NextPage = () => {
  return (
    <Layout title="404">
      <Section>
        <h1>404 - Page Not Found</h1>
      </Section>
    </Layout>
  );
};

export default Custom404;
