'use strict'
const { DataTypes } = require('sequelize')
const sequelize = require('../../config/config');
const Project = require('./project.models');
const Donation = require('./donation.models');
const Volunteering = require('./volunteering.models');
const Transaction = require('./transaction.models')

const User = sequelize.define("user", {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    document_type: {
        type: DataTypes.ENUM("Cedula de Ciudadania", "Cedula de Extranjeria", "Tarjeta de Identidad", "NIT Persona Natural", "NIT Persona Juridica", "NIT Persona Extranjera", "Pasaporte", "Registro Civil"),
        allowNull: false,
        defaultValue: "Cedula de Ciudadania"
    },
    document_number: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true
    },
    phone_number: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    academy_level: {
        type: DataTypes.ENUM("bachiller", "tecnico", "profesional"),
        allowNull: true,
        defaultValue: null
    },
    profession: {
        type: DataTypes.STRING(200),
        allowNull: true
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

module.exports = User;