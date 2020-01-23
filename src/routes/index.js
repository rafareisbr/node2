const express = require('express')

const router = express.Router()

const ProductRoutes = require('./products')

router.use('/products', ProductRoutes)

router.get('', (req, res) => {
    res.send('working')
})

module.exports = router
