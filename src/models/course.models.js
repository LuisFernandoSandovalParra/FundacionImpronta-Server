'use strict'

const { DataTypes } = require('sequelize');
const sequelize = require('../../config/config');
const Module = require('./module.models');

const Course = sequelize.define("course", {
    course_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    url_image: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    course_type: {
        type: DataTypes.ENUM("profesional", "social"),
        allowNull: false
    },
    substantive_function: {
        type: DataTypes.ENUM("Formación profesional", "Proyección Social"),
        allowNull: false
    },
    hours_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    value: {
        type: DataTypes.INTEGER,
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

module.exports = Course;