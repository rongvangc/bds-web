import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/Layouts';
import Section from '../components/Layouts/Section';

const Login: NextPage = () => {
  return (
    <Layout title="Đăng nhập">
      <Section>Đăng nhập</Section>
    </Layout>
  );
};

export default Login;
