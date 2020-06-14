const express = require('express');
const router = express.Router();
const controller = require('./admincontroller')

router.post('/add', controller.Criar)

module.exports = router;