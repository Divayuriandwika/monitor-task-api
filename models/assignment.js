const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const taskSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	division: {
		type: String,
		required: true
	},
	assignment: {
		type: String,
		required: true
    },
    deadline: {
		type: String,
		required: true
    },
    phone: {
		type: Number,
		required: true
	},
});

const Task = mongoose.model('task', taskSchema);

module.exports = Task;