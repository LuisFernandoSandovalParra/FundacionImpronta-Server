'use strict'

const { DataTypes } = require('sequelize');
const sequelize = require('../../config/config');

const Transaction = sequelize.define('transaction', {
    transaction_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    payment_reference: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    payment_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    amount: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    payment_status: {
        type: DataTypes.ENUM("APPROVED", "DECLINED", "VOIDED", "ERROR", "CREATED"),
        allowNull: false,
        defaultValue: "CREATED"
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

module.exports = Transaction;