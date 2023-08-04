require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: import.meta.env.VITE_DB_HOST || 'localhost',
  user: import.meta.env.VITE_DB_USER || 'ericlee',
  database: import.meta.env.VITE_DB_NAME || 'skillgems',
  password: import.meta.env.VITE_DB_PASSWORD || '',
  max: 20
})

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

pool.connect()
  .then((client) => {
    console.log(`pool connected to ${client.user}@${client.host} using database ${client.database} on port ${client.port}`)
  })
  .catch((err) => {
    console.log('ERR DATABASE CONNECT', err)
  })

  module.exports = pool;