const serverless = require('serverless-http')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

// TODO: Routes
app.use('/course', require('./src/routes/course.route'))
app.use('/starwars', require('./src/routes/starwars.route'))

module.exports.handler = serverless(app)