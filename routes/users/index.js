const express = require('express');
const router = express.Router();

const { getAll, findByID, create, login } = require('./controller');

router.get('/', getAll);
router.get('/employee/:id', findByID);
router.post('/', create);
router.post('/login', login);

module.exports = router;