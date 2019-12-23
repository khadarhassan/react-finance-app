const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const financeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
    },
    type: {
      type: String,
      required: true,
      default: 'income'
    },
    value: {
      type: Number,
      required: true,
      trim: true,
      default: 0
    },
    exclude: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Finance = mongoose.model('Finance', financeSchema);

module.exports = Finance;
