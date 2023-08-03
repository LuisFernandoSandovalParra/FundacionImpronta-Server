'use strict'

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('fundacion_impronta', 'root', 'a123', {
    host: 'localhost',
    dialect: 'mariadb',
})

module.exports = sequelize;