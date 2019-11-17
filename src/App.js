import React from 'react';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Amount from './components/Amount/Amount';

import './app.scss';

const App = () => {
  return (
    <>
      <Header title="Finance App" />
      <Layout>
        <Amount />
      </Layout>
    </>
  );
};

export default App;
