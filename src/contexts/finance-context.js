import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);
  const url =
    'http://localhost:4000/api/users/5e04fb153efdc5a3c5f902f8/finances/';

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
    axios.post(url, e).then(res => {
      if (res.data.type === 'income') {
        setIncomeList([...incomeList, res.data]);
      } else {
        setExpenseList([...expenseList, res.data]);
      }
    });
  };

  const deleteAmount = e => {
    axios.delete(`${url}/${e._id}`, e).then(res => {
      if (e.type === 'income') {
        setIncomeList(incomeList.filter(h => h !== e));
      } else {
        setExpenseList(expenseList.filter(h => h !== e));
      }
    });
  };

  const excludeAmount = e => {
    axios.patch(`${url}/${e._id}`, e).then(res => {
      if (res.data.type === 'income') {
        setIncomeList(incomeList.map(item => (item === e ? (item = e) : item)));
      } else {
        setExpenseList(
          expenseList.map(item => (item === e ? (item = e) : item))
        );
      }
    });
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
