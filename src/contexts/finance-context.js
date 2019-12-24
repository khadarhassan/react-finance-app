import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);
  const url = 'http://localhost:4000';

  useEffect(() => {
    getFinances();
  }, []);

  const getFinances = () => {
    axios.get(url).then(res => {
      setIncomeList(res.data.filter(income => income.type === 'income'));
      setExpenseList(res.data.filter(expense => expense.type === 'expense'));
    });
  };

  const addAmount = e => {
    axios.post(`${url}/add`, e);

    if (e.type === 'income') {
      setIncomeList([...incomeList, e]);
    } else {
      setExpenseList([...expenseList, e]);
    }
  };

  const deleteAmount = e => {
    axios.delete(`${url}/${e._id}`);

    if (e.type === 'income') {
      setIncomeList(incomeList.filter(h => h !== e));
    } else {
      setExpenseList(expenseList.filter(h => h !== e));
    }
  };

  const excludeAmount = e => {
    axios.put(`${url}/update/${e._id}`, e);

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
