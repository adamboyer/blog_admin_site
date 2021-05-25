const path = require('path')
const express = require('express')
const hbs = require('hbs')
require('./db/mongoose')
const postRouter = require('./routers/post')
const indexRouter = require('./routers/index')

const app = express()
const viewsPath = path.join(__dirname, '/templates/views')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Setup static directory to serve
app.use(express.static(path.join(__dirname, '/public')))

app.use(express.json())
app.use(indexRouter)
app.use(postRouter)

module.exports = app