import React from 'react';
import type { NextPage } from 'next';
import Layout from '../../components/Layouts';
import Section from '../../components/Layouts/Section';

const Post: NextPage = () => {
  return (
    <Layout title="Tin tức">
      <Section>Tin tức</Section>
    </Layout>
  );
};

export default Post;
