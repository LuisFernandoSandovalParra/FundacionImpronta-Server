'use strict'

const { DataTypes } = require('sequelize');
const sequelize = require('../../config/config');

const Donation = sequelize.define("donation",{
    donation_type:{
        type: DataTypes.ENUM("general","proyecto"),
        allowNull: false,
        defaultValue: "general"
    },
    donation_quantity: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0
    },
    payment_reference:{
        type: DataTypes.STRING(200),
        allowNull: false
    },
    payment_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    payment_status:{
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

module.exports = Donation;