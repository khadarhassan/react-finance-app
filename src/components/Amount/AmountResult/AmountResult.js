import React from 'react';
import * as cn from 'classnames';
import reducer from '../../../util/reducer';

const totalResult = (a, b) => {
  a = a.reduce(reducer, 0);
  b = b.reduce(reducer, 0);

  return a - b;
};

const AmountResult = ({ incomes, expenses }) => {
  incomes = incomes.filter(h => h.exclude !== true);
  expenses = expenses.filter(h => h.exclude !== true);

  return (
    <p
      className={cn('is-medium', {
        'has-text-success': totalResult(incomes, expenses) >= 0,
        'has-text-danger': totalResult(incomes, expenses) < 0
      })}
    >
      <strong>Total:</strong> {totalResult(incomes, expenses)}€
    </p>
  );
};

export default AmountResult;
