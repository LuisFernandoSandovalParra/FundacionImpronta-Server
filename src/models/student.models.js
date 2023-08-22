'use strict'

const { DataTypes } = require('sequelize');
const sequelize = require('../../config/config');

const Student = sequelize.define('student', {
    certificate_number: {
        type: DataTypes.STRING(200),
        allowNull: true,
        unique: true
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
})

module.exports = Student;