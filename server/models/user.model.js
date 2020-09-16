const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
			required: [
				true,
				"-- a username is required --"
		],
		minlength: [3, '-- username must be at least 3 characters long --']
	},
	password: {
		type: String,
			required: [
				true,
				"-- a password is required --"
		],
		minlength: [5, '-- password must be at least 5 characters long --']
	},
	email: {
		type: String,
			required: [
				true,
				"-- an email is required --"
		],
		minlength: [10, '-- email must be at least 10 characters long --']
	},
	birthdate: {
		type: String,
			required: [
				true,
				"-- a birthdate is required --"
		],
		minlength: [8, '-- a birthdate is required --']
	},

}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

module.exports = User;