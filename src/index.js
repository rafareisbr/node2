const express = require('express')
const path = require('path')

const App = express()
const BaseController = require('./routes')
const Db = require('./data')

App.set('view engine', 'ejs')
App.set('views', path.join(__dirname, 'views'))

App.use((req, res, next) => {
    Db.query('SELECT * FROM users WHERE id = 1')
        .then(result => {
            const user = result.rows[0]
            req.user = user
            next()
        })
        .catch(err => console.log(err))
})

App.use(express.json())
App.use(express.urlencoded({ extended: true }))
App.use(express.static(path.join(__dirname, 'public')))

App.use('', BaseController)

module.exports = App
