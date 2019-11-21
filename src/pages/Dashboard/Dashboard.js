import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Layout from '../../components/Layout/Layout';
import Chart from '../../components/Chart/Chart';

const Dashboard = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero title="Dashboard" />
      <Layout>
        <Chart
          data={[2000, 1000, 350]}
          label="Expenses"
          labels={['Rent', 'Car', 'Office']}
        />
        <Chart
          data={[2000, 1000, 350]}
          label="Total"
          labels={['Rent', 'Car', 'Office']}
        />
      </Layout>
    </React.Fragment>
  );
};

export default Dashboard;
