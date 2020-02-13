const express = require('express');
const router = express.Router();
const Task = require('../controllers/Task.controller');

router.get('/', Task.findAll);

router.post('/createTask', Task.create);

module.exports = router;