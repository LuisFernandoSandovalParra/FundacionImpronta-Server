'use strict'

const { DataTypes } = require('sequelize');
const sequelize = require('../../config/config');

const Project = sequelize.define("project", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    abstract: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    topic: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    place_of_application: {
        type: DataTypes.STRING(90),
        allowNull: false
    },
    problematic: {
        type: DataTypes.STRING(90),
        allowNull:false
    },
    proposed: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    population: {
        type: DataTypes.STRING(90),
        allowNull: false
    },
    representative: {
        type: DataTypes.STRING(90),
        allowNull: false
    },
    background: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    necessary_budget: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    current_budget: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    url_image: {
        type: DataTypes.STRING(200),
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

module.exports = Project;