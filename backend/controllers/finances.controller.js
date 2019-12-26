let Finance = require('../models/finances.model');
const User = require('../models/users.model');

const getFinances = (req, res, next) => {
  res.send({ message: req.id });
};

const createFinance = (req, res) => {
  const { title, type, value, exclude } = req.body;

  const newFinace = new Finance({
    title,
    type,
    value,
    exclude
  });

  res.json({ finance: newFinace });

  /* User.findOne({ _id: req.id })
    .then(user => {
      user.finances.push(newFinace);
      res.json({ user: user });
    })
    .catch(err => res.status(400).json('Error: ' + err)); */

  /* newFinace
    .save()
    .then(() => res.json(newFinace))
    .catch(err => res.status(400).json('Error: ' + err)); */
};

const updateFinance = (req, res) => {
  Finance.findById({ _id: req.params.id })
    .then(finance => {
      finance.exclude = req.body.exclude;
      finance
        .save()
        .then(() => res.json('Finance updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
};

const deleteFinance = (req, res) => {
  Finance.findByIdAndDelete(req.params.id)
    .then(() => res.json('Finance deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
};

exports.getFinances = getFinances;
exports.createFinance = createFinance;
exports.updateFinance = updateFinance;
exports.deleteFinance = deleteFinance;
