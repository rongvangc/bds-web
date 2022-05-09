import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/Layouts';
import Section from '../components/Layouts/Section';

const Product: NextPage = () => {
  return (
    <Layout title="Product Item">
      <Section>
        <h1>Product Item</h1>
      </Section>
    </Layout>
  );
};

export default Product;
