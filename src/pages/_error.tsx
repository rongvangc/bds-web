import type { NextPage } from 'next';
import Layout from '../components/Layouts';
import Section from '../components/Layouts/Section';

const customError: NextPage = () => {
  return (
    <Layout title="Error">
      <Section>
        <h1>ERROR - Server-side error occurred</h1>
      </Section>
    </Layout>
  );
};

export default customError;
