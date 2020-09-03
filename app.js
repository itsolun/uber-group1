const express = require('express');
const app = express();
const routes = express.Router();

app.use(express.json());



const db = "uberDB";
const mongodbLink = process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://localhost/' + db ;

const mongoose = require("mongoose");
mongoose.connect(mongodbLink, { useNewUrlParser: true }).then(value => {
    console.log(value.models);
}).catch(error => {
    console.log(error);
});


// APIs
const carAPI   = require('./routes/car');
const userAPI		= require('./routes/user');

// models
const Car = require('./models/car');
const User = require('./models/user');
const Trip = require('./models/trip');
const Point = require('./models/point');

routes.route('/user')

.post(userAPI.postUser)

.get(userAPI.getAllUsers);


routes.route('user/:_id')

.get(userAPI.getUserById)

.put(userAPI.updateUser)

.delete(userAPI.deleteUser);


app.use('/', routes);

const port = process.env.PORT || 3000
app.listen(port);
console.log('Starting UberLike on port ' + port);
