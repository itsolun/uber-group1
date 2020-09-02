const mongoose = require('mongoose');
const User = require('./user');
const Schema = mongoose.Schema;


const CarSchema = mongoose.Schema({

  car_model: {
    type: String,
    required: true
  },
  car_model: {
    type: Date,
    required: true
  },
  car_model: {
    type: String,
    required: true
  },
  platnumber: {
    type: String,
    required: true
  },
  driver: {
    type: Schema.Types.ObjectId, ref: 'User',
    required: true
  }

}
);

module.exports = mongoose.model('Car', CarSchema)