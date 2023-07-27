'use strict'
const { sendEmail } = require('../controllers/email.controller');

const router = require('express').Router();

router.post('/form/send', sendEmail);

module.exports = router;