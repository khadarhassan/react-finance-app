const user = require('express').Router();
const financeRouter = require('./finances-route');
const { findUserById, createUser } = require('../controllers/users.controller');

user.post('/', createUser);

/* user.get('/:id', (req, res, next) => {
  let id = req.params.id;
  next();
}); */

user.use(
  '/:id/finances/',
  (req, res, next) => {
    req.id = req.params.id;
    next();
  },
  financeRouter
);

module.exports = user;
