import type { NextPage } from 'next';
import Layout from '../components/Layouts';
import Section from '../components/Layouts/Section';

const Category: NextPage = () => {
  return (
    <Layout title="Danh mục">
      <Section>
        <h1>Category</h1>
      </Section>
    </Layout>
  );
};

export default Category;
