import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Layout from '../../components/Layout/Layout';
import Chart from '../../components/Chart/Chart';
import { FinanceContext } from '../../contexts/finance-context';
import reducer from '../../util/reducer';

const Dashboard = () => {
  const { incomeList, expenseList } = useContext(FinanceContext);

  const totalIncomes = incomeList.reduce(reducer, 0);
  const totalExpenses = expenseList.reduce(reducer, 0);

  return (
    <React.Fragment>
      <Header />
      <Hero title="Dashboard" />
      <Layout>
        <Chart
          data={[totalIncomes, totalExpenses]}
          label="Expenses"
          labels={['Total Incomes', 'Total Expenses']}
          colors={['green', 'red']}
        />
      </Layout>
    </React.Fragment>
  );
};

export default Dashboard;
