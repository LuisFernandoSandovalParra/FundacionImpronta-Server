'use strict'

const router = require('express').Router();
const { generateIntegritySignature } = require('../controllers/wompi.controller');

router.get('/donations/pay/:amount', generateIntegritySignature);

module.exports = router;