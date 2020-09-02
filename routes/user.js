// user api routes
// Admin module

const User =  require('../models/user');

// create user

const postUser = function postUser(req, res){
  // new instance
  const user = new User();
  user.username = req.body.name;
  user.password = req.body.password;
  user.email = req.body.email;
  user.role = req.body.role;
  user.location = req.body.location;
  user.available = req.body.available;
  user.mobile = req.body.mobile;

  user.save(function(err){
    if (err) {
      console.log(err);
			return res.send(err);
    }
    return res.send(user);
  });
};

// update user with personal id
const updateUser = function updateUser(req, res) {
	User.findById(req.params._id, function(err, user) {
		if (err) {
			console.log(err);
			return res.send(err);
		}
    user.username = req.body.name;
    user.password = req.body.password;
    user.email = req.body.email;
    user.role = req.body.role;
    user.location = req.body.location;
    user.available = req.body.available;
    user.mobile = req.body.mobile;
		user.save(function(err) {
			if (err) {
				console.log(err);
				return res.send(err);
			}
			return res.send({ msg: 'Selected user Updated' });
		});
	});
};

// delete user with personal id
const deleteUser = function deleteUser(req, res) {
	User.remove({_id: req.params._id}, function(err, user) {
		if (err) {
			console.log(err);
			return res.send(err);
		}

		return res.send({ msg: 'Selected user Deleted' });
	});
};

const getAllUsers = function getAllUsers(req, res){
  User.find(function(err, users) {
		if (err) {
			console.log(err);
			return res.send(err);
		}
		return res.send(users);
	});
};

var getUserById = function getUserById(req, res) {
	User.findById(req.params._id, function(err, user) {
		if (err) {
			console.log(err);
			return res.send(err);
		}
		return res.send(user);
	});
};

exports.postUser = postUser;
exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
