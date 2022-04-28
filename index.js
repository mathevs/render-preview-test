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
      previewOverride: process.env.TEST_ENV_VARIABLE,
      secretVariable: process.env.SECRET_VARIABLE,
      secretVariableFromNonYamlGroup: process.env.NON_YAML_GROUP_SECRET,
      testVariableWithNoSync: process.env.TEST_VARIABLE_WITH_NO_SYNC,
    })
    // res.json({ preview_override: process.env.TEST_ENV_VARIABLE })
  } catch (error) {
    console.error(error)
    res.json({ error: 'Cannot get data from database' })
  }
})

app.listen(port, () => console.log(`Listening on port ${port}`))
