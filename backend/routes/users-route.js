const user = require('express').Router();
const financeRouter = require('./finances-route');
const { findUserById, createUser } = require('../controllers/users.controller');

user.post('/', createUser);

user.get('/:userId', findUserById);

user.use(
  '/:userId/finances/',
  (req, res, next) => {
    req.userId = req.params.userId;
    next();
  },
  financeRouter
);

module.exports = user;
