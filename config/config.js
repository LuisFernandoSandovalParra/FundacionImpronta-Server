'use strict'

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('fundacion_impronta', 'root', 'a123', {
    host: 'localhost',
    dialect: 'mariadb',
})

sequelize.authenticate().then(() => {
    console.log('Conectado')
    })
    .catch(err => {
        console.log('No se conecto')
    })

module.exports = sequelize;