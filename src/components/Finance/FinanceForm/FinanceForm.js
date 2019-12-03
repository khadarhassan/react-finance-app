import React, { useState, useContext } from 'react';
import * as cn from 'classnames';
import { FinanceContext } from '../../../contexts/finance-context';

const FinanceForm = () => {
  const [amount, setAmount] = useState({
    title: '',
    value: '',
    type: 'income',
    exclude: false
  });

  const { addAmount } = useContext(FinanceContext);

  const addInput = e => {
    e.preventDefault();

    const { value, title, type } = amount;

    if (value && title && type !== '') {
      addAmount(amount);

      setAmount({
        ...amount,
        title: '',
        value: ''
      });
    } else {
      return;
    }
  };

  return (
    <form onSubmit={e => addInput(e)}>
      <div className="field has-addons">
        <div className="control has-icons-left">
          <div className={'select is-medium'}>
            <select
              className={cn({
                'has-text-success': amount.type === 'income',
                'has-text-danger': amount.type === 'expense'
              })}
              onChange={e =>
                setAmount({
                  ...amount,
                  type: e.target.value
                })
              }
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            {amount.type === 'income' && (
              <span className="icon is-left has-text-success">
                <i className="fas fa-hand-holding-usd"></i>
              </span>
            )}
            {amount.type === 'expense' && (
              <span className="icon is-left has-text-danger">
                <i className="fas fa-hand-holding-usd"></i>
              </span>
            )}
          </div>
        </div>
        <div className="control">
          <input
            className="input is-medium"
            type="text"
            onChange={e =>
              setAmount({
                ...amount,
                title: e.target.value
              })
            }
            value={amount.title}
            placeholder="Title"
          />
        </div>
        <div className="control">
          <input
            className="input is-medium"
            type="number"
            onChange={e =>
              setAmount({
                ...amount,
                value: parseInt(e.target.value)
              })
            }
            value={amount.value}
            placeholder="Amount"
          />
        </div>
        <div className="control">
          <button
            onClick={addInput}
            className="button is-primary is-medium"
            type="submit"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default FinanceForm;
