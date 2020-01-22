const express = require('express')

const Product = require('../models/product')

const router = express.Router()

router.get('', (req, res) => {
    const user = req.user
    Product.getProducts(user)
        .then(result => {
            res.render('index', {
                pageTitle: 'Lista de Produtos',
                products: result.rows.map(
                    product =>
                        new Product(product.id, product.name, product.userId)
                )
            })
        })
        .catch(err => res.status(401).json(err.message))
})

router.get('/new', (req, res) => {
    res.render('products/new', {
        pageTitle: 'Add Product',
        product: new Product(),
        editing: false
    })
})

router.post('/new', (req, res) => {
    const user = req.user
    const productName = req.body.name
    Product.addProduct(new Product(null, productName, user.id))
        .then(result => {
            res.status(201).redirect('/products')
        })
        .catch(err => res.status(401).json(err.message))
})

router.get('/update/:productId', (req, res) => {
    const productId = req.params.productId

    Product.getProduct(productId)
        .then(result => {
            if (!result.rows.length > 0) {
                return res.redirect('/products')
            }
            const product = result.rows[0]
            console.log(product)
            res.render('products/new', {
                pageTitle: 'Update Product',
                editing: true,
                product: new Product(product.id, product.name, product.userId)
            })
        })
        .catch(err => console.log(err))
})

/*
    Para atualizar um produto. Preciso:
    - Checar se o userId condiz com o do usuário
    - Se tem id no produto
*/
router.post('/update/:productId', (req, res) => {
    const userId = req.user.id

    const product = new Product(
        req.params.productId,
        req.body.name,
        parseInt(req.body.userId)
    )

    // Produto pertence ao usuário atual
    if (userId === product.userId) {
        Product.updateProduct(product)
            .then(result => {
                return res.redirect('/products')
            })
            .catch(err => console.log(err))
    }
})

module.exports = router
