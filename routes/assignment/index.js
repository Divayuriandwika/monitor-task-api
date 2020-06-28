const express = require('express');
const router = express.Router();

const { getAll, create, findByID, edit, deleteTask } = require('./controller');

router.get('/', getAll);
router.post('/', create);
router.get('/manager/:id', findByID);
router.put('/:id', edit);
router.delete('/:id', deleteTask);

module.exports = router;