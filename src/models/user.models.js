'use strict'
const { DataTypes } = require('sequelize')
const sequelize = require('../../config/config');

const User = sequelize.define("user", {
    id: {
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
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt:  {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

(async () => {
    await sequelize.sync();
})();

module.exports = User