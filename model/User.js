const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  birthday: {
    type: Date,
    required: true
  },
  telephone: {
    type: String,
    required: true
  },
  payment_day: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  payments: {
    type: Array,
    required: false
  },
  status: {
    type: Boolean,
    required: false,
    default: true
  }
});

module.exports = mongoose.model('Users', schema);