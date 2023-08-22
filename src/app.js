'use strict'
require('dotenv').config();

const routes = require('./routes/routes')
const sequelize = require('../config/config')
const mySequelize = require('./models/manager-models.models')

const cors = require('cors')
const express = require('express');

const app = express();

app.set('port', (process.env.PORT));
app.get(sequelize);
(async () => {
    try {
        await sequelize.authenticate();
        await mySequelize();
        await sequelize.sync();
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
})();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())

app.use('/', routes);

module.exports = app;