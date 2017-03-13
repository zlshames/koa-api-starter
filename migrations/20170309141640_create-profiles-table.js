
exports.up = (knex, Promise) => {
  return knex.schema.createTable('profiles', (table) => {
    table.uuid('id').primary()

    table.uuid('user_id')
    table.foreign('user_id').references('id').inTable('users')

    table.string('first_name').nullable()
    table.string('last_name').nullable()
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('profiles')
}
