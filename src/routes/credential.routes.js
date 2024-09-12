'use strict'

const { credentialRegister, getCredentials } = require('../controllers/credential.controller');
const router = require('express').Router();

router.post('/register', credentialRegister);

module.exports = router;