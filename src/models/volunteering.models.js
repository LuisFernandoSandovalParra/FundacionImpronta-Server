'use strict'

const { DataTypes } = require('sequelize');
const sequelize = require('../../config/config');

const Volunteering = sequelize.define("volunteering", {
    volunteer_hours: {
        type: DataTypes.INTEGER(4),
        allowNull: false
    },
    modality: {
        type: DataTypes.ENUM("presencial", "virtual", "hibrido"),
        allowNull: false,
        defaultValue: "presencial"
    },
    interest_population:{
        type: DataTypes.ENUM("primera infancia", "adulto mayor", "poblaciones vulnerables por circunstancias de vida"),
        allowNull: false,
        defaultValue: "primera infancia"
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

module.exports = Volunteering;