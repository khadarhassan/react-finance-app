const router = require('express').Router();
let Finance = require('../models/finance.model');

router.route('/').get((req, res) => {
  Finance.find()
    .then(finances => res.json(finances))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const { title, type, value, exclude } = req.body;

  const newFinace = new Finance({
    title,
    type,
    value,
    exclude
  });

  newFinace
    .save()
    .then(() => res.json('New Finance added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Finance.findByIdAndDelete(req.params.id)
    .then(() => res.json('Finance deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').put((req, res) => {
  Finance.findById({ _id: req.params.id })
    .then(finance => {
      finance.exclude = req.body.exclude;
      finance
        .save()
        .then(() => res.json('Finance updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
