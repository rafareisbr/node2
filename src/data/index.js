const { Pool } = require('pg')

const pool = new Pool({
    database: 'teste2',
    host: 'localhost',
    user: 'postgres',
    password: 'test',
    max: 20,
    connectionTimeoutMillis: 2000,
    idleTimeoutMillis: 30000
})

module.exports = pool
