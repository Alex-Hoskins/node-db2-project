exports.up = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.createTable('cars', table => {
    // primary key
    table.increments('id') // defaults to 'id' if argument is omitted

    table.text('vin', 128) // sqlite does not enforce the char limit VARCHAR(50)
      .unique()
      .notNullable()

    table.text('make')
      .notNullable()

    table.text('model')
      .notNullable()

    table.integer('mileage')
      .notNullable()

    table.text('title')

    table.text('transmission')
  })
};

exports.down = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.dropTableIfExists('cars')
};
