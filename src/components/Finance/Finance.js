import React from 'react';
import FinanceForm from './FinanceForm/FinanceForm';
import FinanceList from './FinanceList/FinanceList';
import FinanceResult from './FinanceResult/FinanceResult';

const Finance = () => {
  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <FinanceForm />
        <FinanceList />
        <FinanceResult />
      </div>
    </div>
  );
};

export default Finance;
