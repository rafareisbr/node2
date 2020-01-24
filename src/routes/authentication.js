const express = require('express')

const AuthenticationController = require('../controllers/authentication')

const router = express.Router()

router.get('/login', AuthenticationController.getLogin)

router.post('/login', AuthenticationController.postLogin)

router.post('/logout', AuthenticationController.postLogout)

router.get('/register', AuthenticationController.getRegister)

router.post('/register', AuthenticationController.postRegister)

router.get('', (req, res) => {
    res.redirect('/auth/login')
})

module.exports = router
