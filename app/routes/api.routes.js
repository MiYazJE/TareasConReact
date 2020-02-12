const express = require('express');
const router = express.Router();
const Tarea = require('../controllers/Tarea.controller');

router.get('/', (req, res) => {
    res.json({
        message: 'Api working...'
    });
})

module.exports = router;