const mongoose = require('mongoose');
const randToken = require('rand-token');
const Point = require('./Point')
const Car = require('./car')
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  token: {
    type: String,
    default: function () {
      return randToken.generate(25);
    }
  },
  role: {
    type: String,
    required: true
  },
  location: {
    type: Point,
    // required: true
  },
  available: {
    type: Boolean,
    // required: true
  },
  mobile: {
    type: Number,
    required: true
  },
  car: {
    type: Schema.Types.ObjectId, ref: 'Car'
  },
  trips: [{type: Schema.Types.ObjectId, ref: 'Trip'}]
}
);

module.exports = mongoose.model('User', UserSchema)
