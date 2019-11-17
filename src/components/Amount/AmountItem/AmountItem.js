import React, { useState } from 'react';
import * as cn from 'classnames';

import './amountItem.scss';

const AmountItem = ({ amount, deleteAmount, excludeAmount }) => {
  const [exclude, setExclude] = useState(true);

  const deleteItem = () => {
    deleteAmount(amount);
  };

  const excludeItem = () => {
    setExclude(!exclude);
    excludeAmount(amount);
  };

  return (
    <div
      className={cn('block is-large has-text-white', {
        'has-background-success': amount.type === 'income',
        'has-background-danger': amount.type === 'expense',
        'has-background-grey-lighter': amount.exclude === true
      })}
    >
      <p>
        {amount.title}: {amount.value}€
      </p>

      <div className="tags has-addons">
        <span
          className="tag is-white"
          onClick={() => excludeItem((amount.exclude = exclude))}
        >
          Exclude
        </span>
        <span className="tag is-danger" onClick={() => deleteItem(amount)}>
          Delete
        </span>
      </div>
    </div>
  );
};

export default AmountItem;
