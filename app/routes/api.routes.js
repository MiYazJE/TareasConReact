const express = require('express');
const router = express.Router();
const Task = require('../controllers/Task.controller');

router.get('/', Task.findAll);

module.exports = router;