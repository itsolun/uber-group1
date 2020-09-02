const mongoose = require('mongoose');
const randToken = require('rand-token')
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
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  available: {
    type: Boolean,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  },
  car: {
    type: Schema.Types.ObjectId, ref: 'Car'
  }
}
);

module.exports = mongoose.model('User', UserSchema)