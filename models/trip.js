const mongoose = require('mongoose');
const Point = require('./Point')
const User = require('./user')
const Schema = mongoose.Schema;

const TripSchema = mongoose.Schema({
  start_point: {
    type: Point,
    required: true
  },
  destination: {
    type: Point,
    required: true
  },
  arrival_time: {
    type: Date,
    required: true
  },
  arrival_time: {
    type: Date,
    required: true
  },
  cost: {
    type: String,
    required: true
  },
  driver: {
    type: Schema.Types.ObjectId, ref: 'User',
    required: true
  },
  rider: {
    type: Schema.Types.ObjectId, ref: 'User',
    required: true
  },
  car: {
    type: Schema.Types.ObjectId, ref: 'Car',
    required: true
  }
}
);

module.exports = mongoose.model('Trip', TripSchema)
