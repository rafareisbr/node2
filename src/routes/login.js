const express = require('express')

const AuthenticationController = require('../controllers/authentication')

const router = express.Router()

router.get('/login', AuthenticationController.getLogin)

router.post('/login', AuthenticationController.postLogin)

router.post('/logout', AuthenticationController.postLogout)

module.exports = router
