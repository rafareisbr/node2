const express = require('express')

const router = express.Router()

const ShopRoutes = require('./shop')
const AuthRoutes = require('./authentication')

router.use('/shop', ShopRoutes)
router.use('/auth', AuthRoutes)

router.get('', (req, res) => {
    res.redirect('/shop')
})

module.exports = router
