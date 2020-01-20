const express = require('express')

const router = express.Router()

const ProductsController = require('./products')

router.use('/products', ProductsController)

router.get('/index', (req, res) => {
    res.send('working')
})

module.exports = router
