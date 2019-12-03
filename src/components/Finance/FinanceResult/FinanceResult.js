import React, { useContext } from 'react';
import * as cn from 'classnames';
import reducer from '../../../util/reducer';
import { FinanceContext } from '../../../contexts/finance-context';

const totalResult = (a, b) => {
  let firstList = a.filter(h => h.exclude !== true);
  let secondList = b.filter(h => h.exclude !== true);

  firstList = firstList.reduce(reducer, 0);
  secondList = secondList.reduce(reducer, 0);

  return firstList - secondList;
};

const FinanceResult = () => {
  const { incomeList, expenseList } = useContext(FinanceContext);

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

export default FinanceResult;
