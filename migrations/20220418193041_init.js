/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.createTable('items', (table) => {
    table.increments('id')
    table.string('name')
  })

  await knex('items').insert([{ name: 'item 1' }, { name: 'item 2' }])
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('items')
