'use strict'

const { DataTypes } = require('sequelize');
const sequelize = require('../../config/config');

const Module = sequelize.define('module', {
    module_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    url_infographic: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    url_pdf: {
        type: DataTypes.STRING(200),
        allowNull: false
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

module.exports = Module;