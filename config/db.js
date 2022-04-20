require('dotenv').config({path: '../.env'})

module.exports = {
  migrations: { directory: '../migrations/' },
  client: 'pg',
  connection: process.env.DB_CONNECTION_STRING,
}
