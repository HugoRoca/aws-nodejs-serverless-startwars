const serverless = require('serverless-http')
const express = require('express')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express()

app.use(bodyParser.json())

// TODO: Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// TODO: Routes
app.use('/course', require('./src/routes/course.route'))
app.use('/starwars', require('./src/routes/starwars.route'))

module.exports.handler = serverless(app)