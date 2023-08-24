'use strict'

const router = require('express').Router();

const { createTransaction, webHook, getTransactionById, getTransactionByReference, modifyPaymentStatus } = require('../controllers/transaction.controller');

router.post('/create', createTransaction);
router.post('/webhook', webHook);
router.get('/search/id/:transaction_id', getTransactionById);
router.get('/search/reference/:payment_reference', getTransactionByReference);
router.put('/update/status', modifyPaymentStatus);

module.exports = router;