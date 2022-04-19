const express = require('express')
const dbConfig = require('./config/db')
require('dotenv').config()

const app = express()
const knex = require('knex')(dbConfig)

const port = process.env.PORT || 3001

app.get('/', async (req, res) => {
  const items = await knex.from('items').select('*')
  res.send({ items, preview_override: process.env.TEST_ENV_VARIABLE })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
