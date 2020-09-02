const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());



const db = "uberDB";
var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/' + db ;

const mongoose = require("mongoose");
mongoose.connect(mongoUri, { useNewUrlParser: true });


// APIs
const carAPI   = require('./routes/car');
const userAPI		= require('./routes/user');

// models
const Car   	= require('./models/car');
const User		= require('./models/user');
const Trip		= require('./models/trip');
const Point		= require('./models/point');

router.route('/user')

	.post(userAPI.postUser)

	.get(userAPI.getAllUsers);


router.route('user/:_id')

	.get(userAPI.getUserById)

	.put(userAPI.updateUser)

	.delete(userAPI.deleteUser);


app.use('/uber', router);

const port     	= process.env.PORT || 3000
app.listen(port);
console.log('Starting UberLike on port ' + port);
