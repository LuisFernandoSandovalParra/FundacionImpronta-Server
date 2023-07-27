'use strict'
require('dotenv').config();

const emailRoutes = require('./routes/email.routes')

const cors = require('cors')
const express = require('express');

const app = express();

app.set('port', (process.env.PORT));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())

app.use('/api', emailRoutes);

module.exports = app;