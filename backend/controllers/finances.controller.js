let Finance = require('../models/finances.model');
const User = require('../models/users.model');

const getFinances = (req, res) => {
  User.findById({ _id: req.userId })
    .then(user => {
      res.json(user.finances);
    })
    .catch(err => res.status(400).json('Error: ' + err));
};

const createFinance = (req, res) => {
  const { title, type, value, exclude } = req.body;

  const newFinace = {
    title,
    type,
    value,
    exclude
  };

  User.findByIdAndUpdate({ _id: req.userId })
    .then(user => {
      user.finances.push(newFinace);
      res.json(newFinace);
      user.save();
    })
    .catch(err => res.status(400).json('Error: ' + err));
};

const updateFinance = (req, res) => {
  User.findByIdAndUpdate({ _id: req.userId })
    .then(user => {
      user.finances.forEach(element => {
        if (element.id === req.params.financeId) {
          element.exclude = req.body.exclude;
        }
      });
      res.json(user.finances);
      user.save();
    })
    .catch(err => res.status(400).json('Error: ' + err));
};

const deleteFinance = (req, res) => {
  User.findByIdAndUpdate({ _id: req.userId })
    .then(user => {
      user.finances.id(req.params.financeId).remove();
      res.json(user.finances);
      user.save();
    })
    .catch(err => res.status(400).json('Error: ' + err));
};

exports.getFinances = getFinances;
exports.createFinance = createFinance;
exports.updateFinance = updateFinance;
exports.deleteFinance = deleteFinance;
