const router = require('express-promise-router')()

const db = require('../data/index')

const router = express.Router()

router.get('', async (req, res) => {
    db.res.render('index', { pageTitle: 'Products' })
})

module.exports = router
