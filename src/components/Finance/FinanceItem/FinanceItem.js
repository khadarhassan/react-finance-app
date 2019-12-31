import React, { useContext } from 'react';
import * as cn from 'classnames';
import { FinanceContext } from '../../../contexts/finance-context';

import './financeItem.scss';

const FinanceItem = ({ amount }) => {
  const { deleteAmount, excludeAmount } = useContext(FinanceContext);

  const deleteItem = () => {
    deleteAmount(amount);
  };

  const excludeItem = () => {
    amount.exclude = !amount.exclude;
    excludeAmount(amount);
  };

  return (
    <div
      className={cn('block is-large has-text-white', {
        'has-background-success': amount.type === 'income',
        'has-background-danger': amount.type === 'expense',
        'has-background-grey-lighter': amount.exclude
      })}
    >
      <p>
        {amount.title}: {amount.value}€
      </p>

      <div className="tags has-addons">
        <span className="tag is-white" onClick={() => excludeItem()}>
          Exclude
        </span>
        <span className="tag is-danger" onClick={() => deleteItem(amount)}>
          Delete
        </span>
      </div>
    </div>
  );
};

export default FinanceItem;
