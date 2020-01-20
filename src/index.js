const express = require('express')
const path = require('path')

const App = express()
const BaseController = require('./controllers')

App.set('view engine', 'ejs')
App.set('views', path.join(__dirname, 'views'))

App.use(express.json())
App.use(express.urlencoded({ extended: true }))
App.use(express.static(path.join(__dirname, 'public')))

App.use('', BaseController)

module.exports = App
