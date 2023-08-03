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
    payment_method: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    payment_reference: {
        type: DataTypes.STRING,
        allowNull: false
    },
    payment_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    currency: {
        type: DataTypes.ENUM("COP", "USD"),
        allowNull: false
    },
    amount: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    payment_status: {
        type: DataTypes.ENUM("APPROVED", "DECLINED", "VOIDED", "ERROR", "CREATED"),
        allowNull: false,
        defaultValue: "CREATED"
    }
});

module.exports = Transaction;