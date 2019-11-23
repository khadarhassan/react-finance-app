import React, { useState, createContext } from 'react';

export const FinanceStore = createContext();

export const FinanceProvider = ({ children }) => {
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
    <FinanceStore.Provider
      value={{
        incomeList,
        expenseList,
        addInput,
        deleteAmount,
        excludeAmount
      }}
    >
      {children}
    </FinanceStore.Provider>
  );
};
