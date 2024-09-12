'use strict'

const transactionRepository = require('../repositories/transaction.repository')

const createTransaction = async (transactionData) => {
    console.log(transactionData)
    const validTransaction = await transactionRepository.getTransactionByReference(transactionData.transaction.reference);
    if (validTransaction) {
        throw new Error("La transacción ya existe.");
    }
    return await transactionRepository.createTransaction(transactionData);
}

const getTransactionById = async (transaction_id) => {
    const transaction = await transactionRepository.getTransaction(transaction_id);
    if (!transaction) {
        throw new Error("La transacción que busca, no existe.");
    }
    return transaction;
}

const getTransactionByReference = async (payment_reference) => {
    const transaction = await transactionRepository.getTransactionByReference(payment_reference);
    if (!transaction) {
        throw new Error("La transacción que busca, no existe");
    }
    return transaction;
}

const updateTransaction = async (transaction_id, transactionData) => {
    const validTransaction = await transactionRepository.getTransaction(transactionData.transaction_id);
    if (!validTransaction) {
        throw new Error("La transacción que intenta actualizar no existe.");
    }
    return await transactionRepository.updateTransaction(transaction_id, transactionData);
}

const updateTransactionByReference = async (transactionData) => {
    const validTransaction = await transactionRepository.getTransaction(transactionData.transaction_id);
    if (!validTransaction) {
        throw new Error("La transacción que intenta actualizar no existe.");
    }
    return await transactionRepository.updateTransactionByReference(transactionData);
}

const formatCentsToCOP = (cents) => {
    return cents / 100;
}

const webHook = async (info) => {
    if (info.event === "transaction.updated") {
        const validTransaction = await transactionRepository.getTransactionByReference(info.data.transaction.reference);
        if (validTransaction) {
            const updatedTransaction = updateTransactionByReference({
                payment_reference: info.data.transaction.reference,
                payment_date: info.sent_at,
                amount: formatCentsToCOP(info.data.transaction.amount_in_cents),
                payment_status: info.data.transaction.status,
                updatedAt: Date.now()
            })
            if (updatedTransaction === 0) {
                throw new Error("El proceso de actualización de transacción salio mal");
            }
            return updatedTransaction;
        }
        else {
            const createdTransaction = await createTransaction(info);
            return createdTransaction;

        }
    }
}

module.exports = { createTransaction, getTransactionById, getTransactionByReference, updateTransaction, webHook };