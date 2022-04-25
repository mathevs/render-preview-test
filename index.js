const express = require('express')
const dbConfig = require('./config/db')
require('dotenv').config()

const app = express()
const knex = require('knex')(dbConfig)

const port = process.env.PORT || 3001

app.get('/', async (req, res) => {
  try {
    const items = await knex.from('items').select('*')
    res.json({
      items,
      run_evironment: process.env.RUN_EVNIRONMENT,
      preview_override: process.env.TEST_ENV_VARIABLE,
      newTestEnv: process.env.NEW_TEST_ENV,
      envFromDashboard: process.env.ENV_FROM_DASHBOARD,
      hostname: process.env.HOSTNAME,
    })
    // res.json({ preview_override: process.env.TEST_ENV_VARIABLE })
  } catch (error) {
    console.error(error)
    res.json({ error: 'Cannot get data from database' })
  }
})

app.listen(port, () => console.log(`Listening on port ${port}`))
