const Db = require('../data/index')

module.exports = class Product {
    static getProducts = user => {
        return Db.query(
            `SELECT * FROM products AS product WHERE product."userId"=$1 ORDER BY id`,
            [user.id]
        )
    }

    static getProduct = id => {
        return Db.query(
            `SELECT * FROM products AS product WHERE product.id = $1`,
            [id]
        )
    }

    static addProduct = product => {
        return Db.query(
            `INSERT INTO "products" (id, name, "userId") VALUES (DEFAULT, $1, $2)`,
            [product.name, product.userId]
        )
    }

    static updateProduct = product => {
        return Db.query(`UPDATE products SET name=$1 WHERE products.id = $2`, [
            product.name,
            product.id
        ])
    }

    static deleteProduct = product => {
        return Db.query(`DELETE FROM products WHERE "id"=$1`, [product.id])
    }

    constructor(id = null, name = '', userId = null) {
        this.id = id
        this.name = name
        this.userId = userId
    }
}
