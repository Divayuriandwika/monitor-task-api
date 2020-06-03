const express = require('express');
const app = express();
const cors = require('cors');
const { PORT, db } = require('./config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.status(200).json({ message: 'hello to monitor api ' });
});

app.use('/users', require('./routes/users'));
app.use('/task', require('./routes/assignment'));

if (db) {
	app.listen(PORT, () => {
		console.log(`this app listen to port ${PORT}`)
	});
}