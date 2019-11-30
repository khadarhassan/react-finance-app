import React, { useContext } from 'react';
import * as cn from 'classnames';
import reducer from '../../../util/reducer';
import { FinanceStore } from '../FinanceStore';
import FinanceItem from '../FinanceItem/FinanceItem';

const FinanceList = () => {
  const { incomeList, expenseList } = useContext(FinanceStore);
  const renderAmountItem = (amount, index) => {
    return <FinanceItem key={index} amount={amount} />;
  };

  const renderAmounts = (type, list, className) => {
    return (
      <React.Fragment>
        <p style={{ marginBottom: '5px' }}>{type}</p>
        {list.map((amount, index) => renderAmountItem(amount, index))}
        <span className={cn('tag', className)}>{list.reduce(reducer, 0)}€</span>
      </React.Fragment>
    );
  };

  return (
    <div style={{ marginTop: '40px' }}>
      {renderAmounts('Income', incomeList, 'is-success')}
      <hr />
      {renderAmounts('Expense', expenseList, 'is-danger')}
      <hr />
    </div>
  );
};

export default FinanceList;
