import React from 'react';
import AmountInput from './AmountInput/AmountInput';
import AmountList from './AmountList/AmountList';
import AmountResult from './AmountResult/AmountResult';

const Finance = () => {
  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <AmountInput />
        <AmountList />
        <AmountResult />
      </div>
    </div>
  );
};

export default Finance;
