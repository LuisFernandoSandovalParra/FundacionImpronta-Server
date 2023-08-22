'use strict'

const { DataTypes } = require('sequelize');
const sequelize = require('../../config/config');

const Class = sequelize.define('class', {
    video_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    class_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    url_video:{
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

module.exports = Class;