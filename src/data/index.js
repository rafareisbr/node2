const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'test',
    max: 20,
    connectionTimeoutMillis: 2000,
    idleTimeoutMillis: 30000
})

module.exports = pool
