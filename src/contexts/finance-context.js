import React, { useState, createContext } from 'react';

export const FinanceContext = createContext();

const income = [
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
];

const expense = [
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
];

export const FinanceProvider = ({ children }) => {
  const [incomeList, setIncomeList] = useState(income);

  const [expenseList, setExpenseList] = useState(expense);

  const addAmount = e => {
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
    <FinanceContext.Provider
      value={{
        incomeList,
        expenseList,
        addAmount,
        deleteAmount,
        excludeAmount
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};
