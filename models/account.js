var mongoose = require('mongoose')
, Schema = mongoose.Schema;	
var Account = mongoose.Schema({
	firstName : String,
	lastName : String,
	phoneNumber : String,
	email : String
});

var MyAcc = mongoose.model('Account', Account);

var addAccount = function(data, callback) {
	var instance = new MyAcc();
	instance.firstName = data.firstName;
	instance.lastName = data.lastName;
	instance.phoneNumber = data.phoneNumber;
	instance.email = data.email;
	instance.save(function(err) {
		if (err) {
			callback(err);
		}
		else {
			callback(null);
		}
	});
};

module.exports = mongoose.model('Account', Account);
module.exports.addAccount = addAccount;