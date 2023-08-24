'use strict'

const Transaction = require('../models/transaction.models');

const createTransaction = async (transactionData) => {
    return await Transaction.create(transactionData);
}

const getTransactionByReference = async (payment_reference) => {
    return await Transaction.findOne({
        where: {
            payment_reference: payment_reference
        }
    })
}

const getTransaction = async (transaction_id) => {
    return await Transaction.findByPk(transaction_id);
}

const updateTransaction = async (transaction_id, transactionData) => {
    return await Transaction.update(transactionData, { where: { transaction_id: transaction_id } })
}

module.exports = { createTransaction, getTransaction, updateTransaction, getTransactionByReference };