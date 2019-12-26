const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB Database connection established successfully');
});

const usersRouter = require('./routes/users-route');

app.use('/api/users', usersRouter);

app.listen(port, () => {
  console.log(`server listening on port ${port}!`);
});
