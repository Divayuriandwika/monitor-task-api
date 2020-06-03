const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
	fullname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	role: {
		type: String,
		default: 'karyawan'
	},
});

const User = mongoose.model('users', userSchema);

module.exports = User;