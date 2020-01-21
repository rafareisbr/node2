const express = require('express')

const db = require('../data/index')

const router = express.Router()

router.get('', (req, res) => {
    const user = req.user
    db.query(`SELECT * FROM products AS product WHERE product."userId" = $1`, [
        user.id
    ])
        .then(result => {
            res.render('index', {
                pageTitle: 'Products',
                products: result.rows
            })
        })
        .catch(err => res.status(401).json(err.message))
})

router.get('/new', (req, res) => {
    res.render('products/new', {
        pageTitle: 'Add Product'
    })
})

router.post('/new', (req, res) => {
    const user = req.user
    const productName = req.body.name
    db.query(
        `INSERT INTO products (id, name, "userId") VALUES (DEFAULT, $1, $2)`,
        [productName, user.id]
    )
        .then(result => {
            res.render('index', {
                pageTitle: 'Products',
                products: result.rows
            })
        })
        .catch(err => res.status(401).json(err.message))
    res.status(201).redirect('/products')
})

module.exports = router
