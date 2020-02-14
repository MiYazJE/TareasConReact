const express = require('express');
const router = express.Router();
const Task = require('../controllers/Task.controller');

router.get('/', Task.findAll);

router.post('/deleteTask/', Task.delete);

router.post('/createTask', Task.create);

router.get('/getID/:title', Task.getId)

module.exports = router;