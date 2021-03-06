import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Layout from '../../components/Layout/Layout';
import Finance from '../../components/Finance/Finance';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero title="Finance App" />
      <Layout>
        <Finance />
      </Layout>
    </React.Fragment>
  );
};

export default Home;
