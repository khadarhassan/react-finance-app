import React, { useContext } from 'react';
import * as cn from 'classnames';
import reducer from '../../../util/reducer';
import { FinanceStore } from '../FinanceStore';

const totalResult = (a, b) => {
  a = a.filter(h => h.exclude !== true);
  b = b.filter(h => h.exclude !== true);

  a = a.reduce(reducer, 0);
  b = b.reduce(reducer, 0);

  return a - b;
};

const AmountResult = () => {
  const { incomeList, expenseList } = useContext(FinanceStore);

  return (
    <p
      className={cn('is-medium', {
        'has-text-success': totalResult(incomeList, expenseList) >= 0,
        'has-text-danger': totalResult(incomeList, expenseList) < 0
      })}
    >
      <strong>Total:</strong> {totalResult(incomeList, expenseList)}€
    </p>
  );
};

export default AmountResult;
