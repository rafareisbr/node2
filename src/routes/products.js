const express = require('express')

const ProductsController = require('../controllers/products')

const router = express.Router()

router.get('', ProductsController.getProducts)

router.get('/add', ProductsController.getProductAdd)

router.post('/add', ProductsController.postProductAdd)

router.get('/:productId', ProductsController.getProductDetail)

router.get('/:productId/update', ProductsController.getProductUpdate)

router.post('/:productId/update', ProductsController.postProductUpdate)

router.post('/:productId/delete', ProductsController.postProductDelete)

module.exports = router
