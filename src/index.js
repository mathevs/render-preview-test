const express = require('express')
const dbConfig = require('../config/db')
require('dotenv').config()

const app = express()
const knex = require('knex')(dbConfig)

app.get('/', async (req, res) => {
  const items = await knex.from('items').select('*')
  res.send({ items, preview_override: process.env.TEST_ENV_VARIABLE })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
