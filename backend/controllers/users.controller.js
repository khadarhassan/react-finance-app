const bcrypt = require('bcrypt');
const User = require('../models/users.model');

const createUser = (req, res) => {
  const { name, email, password } = req.body;

  if ((!name || !email, !password)) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  User.findOne({ email })
    .then(user => {
      if (user) return res.status(400).json({ msg: 'User already exists' });

      const newUser = new User({
        name,
        email,
        password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;

          newUser
            .save()
            .then(user =>
              res.json({ user: { name: user.name, email: user.email } })
            )
            .catch(err => res.status(400).json('Error: ' + err));
        });
      });
    })
    .catch(err => res.status(400).json('Error: ' + err));
};

const findUserById = (req, res) => {
  User.findById({ _id: req.params.userId })
    .then(user => res.json({ user: user }))
    .catch(err => res.status(400).json('Error: ' + err));
};

exports.createUser = createUser;
exports.findUserById = findUserById;
