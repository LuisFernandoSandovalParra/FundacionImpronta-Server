'use strict'

const { DataTypes } = require('sequelize');
const sequelize = require('../../config/config');

const Project = sequelize.define("project", {
    project_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
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
    problematic: {
        type: DataTypes.STRING(90),
        allowNull: false
    },
    proposal: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    url_image: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    url_video:{
        type: DataTypes.STRING(200),
        allowNull: false
    },
    project_type:{
        type: DataTypes.ENUM("extension", "social"),
        allowNull: false,
        defaultValue: "extension"
    },
    state:{
        type: DataTypes.ENUM("active", "unactive"),
        allowNull: false,
        defaultValue: "active"
    },
    expected_budget: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    current_budget: {
        type: DataTypes.BIGINT,
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
});

module.exports = Project;