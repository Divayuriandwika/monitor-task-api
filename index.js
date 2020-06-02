const express = require('express');
const app = express();
const cors = require('cors');
const { PORT, db } = require('./config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.status(200).json({ messege: 'hello to monitor api ' });
});

if (db) {
	app.listen(PORT, () => {
		console.log(`this app listen to port ${PORT}`);
	});
}