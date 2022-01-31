const express = require('express')
const serverless = require('serverless-http')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router()

router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write('<h1>Hello from Express.js!</h1>')
  res.end()
})

router.get('/another', (req, res) => {
  return res.json({ route: req.originalUrl })
})

router.post('/api/v1/handler', (req, res) => {
  return res.json({ postBody: req.body })
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/.netlify/functions/server', router)  // path must route to lambda

module.exports = app
module.exports.handler = serverless(app)