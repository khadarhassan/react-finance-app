const finance = require('express').Router();
const {
  getFinances,
  createFinance,
  updateFinance,
  deleteFinance
} = require('../controllers/finances.controller');

finance.get('/', getFinances);

finance.post('/', createFinance);

finance.delete('/:id', deleteFinance);

finance.patch('/:id', updateFinance);

module.exports = finance;
