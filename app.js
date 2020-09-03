const express = require('express');
const app = express();
const routes = express.Router();
const passport = require("passport");
const localStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");


// models
// const dashboard = require('./routes/website/public');
const Car = require('./models/car');
const User = require('./models/user');
const Trip = require('./models/trip');
const Point = require('./models/point');


// APIs
const carAPI   = require('./routes/car');
const userAPI		= require('./routes/user');

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());

// passport.use(new localStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

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

app.get("/", function (req, res) {
    res.render("homepage");
});

app.get("/register", function (req, res) {
    res.render("register");
});

app.get("/success", function (req, res) {
    res.render("success");
});

app.post("/register", function(req, res){
  const new_user = routes.route('/user').post(userAPI.postUser)
    mongoose.connection.collection(db).insertOne(new_user, function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");

    });
    return res.render('success');
});


app.get("/login", function (req, res) {
    res.render("login");
});

app.get("/logout", function (req, res) {
    res.render("logout");
});


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
