const finance = require('express').Router();
const {
  getFinances,
  createFinance,
  updateFinance,
  deleteFinance
} = require('../controllers/finances.controller');

finance.get('/', getFinances);

finance.post('/', createFinance);

finance.delete('/:financeId', deleteFinance);

finance.patch('/:financeId', updateFinance);

module.exports = finance;
