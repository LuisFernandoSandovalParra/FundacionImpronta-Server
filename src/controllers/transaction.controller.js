'use strict '

const transactionService = require('../services/transaction.service')

const createTransaction = async (req, res) => {
    const { user_id, course_id, payment_reference, amount, payment_status } = req.body;
    try {
        const transaction = await transactionService.createTransaction({
            payment_reference: payment_reference,
            payment_date: Date.now(),
            amount: amount,
            payment_status: payment_status,
            user_id: user_id,
            course_id: course_id,
        })
        res.status(200).json({ ok: true, info: transaction });
    } catch (error) {
        res.status(500).json({ ok: false, info: error });
    }
}

const modifyPaymentStatus = async (req, res) => {
    const { transaction_id, payment_status } = req.body;
    try {
        const updateTransactionStatus = await transactionService.updateTransaction(transaction_id, { payment_status: payment_status, updateAt: Date.now() })
        res.status(200).json({ ok: true, info: updateTransactionStatus })
    } catch (error) {
        res.status(500).json({ ok: false, info: error })
    }
}

const getTransactionById = async (req, res) => {
    const { transaction_id } = req.params;
    try {
        const transaction = await transactionService.getTransactionById(transaction_id);
        res.status(200).json({ ok: true, info: transaction })
    } catch (error) {
        res.status(500).json({ ok: false, info: error })
    }
}

const getTransactionByReference = async (req, res) => {
    const { payment_reference } = req.params;
    try {
        const transaction = await transactionService.getTransactionByReference(payment_reference);
        res.status(200).json({ ok: true, info: transaction })
    } catch (error) {
        res.status(500).json({ ok: false, info: error })
    }
}

const webHook = async(req, res) => {
    const info = req.body;
    await transactionService.webHook()
    console.log(info);
    res.status(200).json({})
}

module.exports = { createTransaction, modifyPaymentStatus, getTransactionById, getTransactionByReference, webHook };