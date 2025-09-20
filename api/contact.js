const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const contactController = require('../src/controller/contactController');

const app = express();
app.use(bodyParser.json());

app.post('/', contactController.submitContact);

module.exports = app;
module.exports.handler = serverless(app);
