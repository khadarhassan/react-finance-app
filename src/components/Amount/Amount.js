import React, { useState } from 'react';
import AmountInput from './AmountInput/AmountInput';
import AmountList from './AmountList/AmountList';
import AmountResult from './AmountResult/AmountResult';

const Amount = () => {
  const [incomeList, setIncomeList] = useState([
    {
      title: 'Tax refund',
      type: 'income',
      value: 2000,
      exclude: false
    },
    {
      title: 'Side project',
      type: 'income',
      value: 3000,
      exclude: false
    }
  ]);

  const [expenseList, setExpenseList] = useState([
    {
      title: 'Domains',
      type: 'expense',
      value: 435,
      exclude: false
    },
    {
      title: 'Hosting',
      type: 'expense',
      value: 155,
      exclude: false
    }
  ]);

  const addInput = e => {
    if (e.type === 'income') {
      setIncomeList([...incomeList, e]);
    } else {
      setExpenseList([...expenseList, e]);
    }
  };

  const deleteAmount = e => {
    if (e.type === 'income') {
      setIncomeList(incomeList.filter(h => h !== e));
    } else {
      setExpenseList(expenseList.filter(h => h !== e));
    }
  };

  const excludeAmount = e => {
    if (e.type === 'income') {
      setIncomeList(incomeList.map(item => (item === e ? (item = e) : item)));
    } else {
      setExpenseList(expenseList.map(item => (item === e ? (item = e) : item)));
    }
  };

  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <AmountInput addInput={addInput} />
        <AmountList
          incomeList={incomeList}
          expenseList={expenseList}
          deleteAmount={deleteAmount}
          excludeAmount={excludeAmount}
        />
        <AmountResult incomes={incomeList} expenses={expenseList} />
      </div>
    </div>
  );
};

export default Amount;
