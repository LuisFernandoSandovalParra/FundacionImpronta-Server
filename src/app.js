'use strict'
require('dotenv').config();

const routes = require('./routes/routes')
const connection = require('../config/config')

const cors = require('cors')
const express = require('express');

const app = express();

app.set('port', (process.env.PORT));
app.get(connection)

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())

app.use('/', routes);

module.exports = app;