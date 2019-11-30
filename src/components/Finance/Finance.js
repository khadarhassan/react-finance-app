import React from 'react';
import FinanceInput from './FinanceInput/FinanceInput';
import FinanceList from './FinanceList/FinanceList';
import FinanceResult from './FinanceResult/FinanceResult';

const Finance = () => {
  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <FinanceInput />
        <FinanceList />
        <FinanceResult />
      </div>
    </div>
  );
};

export default Finance;
