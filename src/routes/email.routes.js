'use strict'
const { sendEmail, sendVolunteerEmail } = require('../controllers/email.controller');

const router = require('express').Router();

router.post('/form/send', sendEmail);
router.post('/volunteers/form/send', sendVolunteerEmail);

module.exports = router;