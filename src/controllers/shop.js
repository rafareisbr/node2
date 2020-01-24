const Product = require('../models/product')

exports.getIndex = (req, res) => {
    const user = req.user
    Product.getProducts(user).then(result => {
        console.log(result.rows)

        res.render('shop/index', {
            pageTitle: 'Store',
            products: [
                {
                    id: 1,
                    name: 'Civic',
                    price: 23000.0,
                    vendedor: { id: 1, name: 'VendeTudo' }
                },
                {
                    id: 2,
                    name: 'Hillux',
                    price: 75000.0,
                    vendedor: { id: 2, name: 'Magalu' }
                },
                {
                    id: 3,
                    name: 'Vectra',
                    price: 35000.0,
                    vendedor: { id: 3, name: 'Zé da Construção' }
                }
            ]
        })
    })
}
