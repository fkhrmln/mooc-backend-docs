require('dotenv').config()

const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000
const HOST = process.env.HOST || 'localhost'

const swaggerUI = require('swagger-ui-express')
const swaggerDocs = require('./swagger.json')

app.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`)
})