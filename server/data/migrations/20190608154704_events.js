exports.up = function(knex, Promise) {
  return knex.schema.createTable("events", tbl => {
    tbl.increments();

    tbl.string("title", 128).notNullable();
    tbl.text("description");

    tbl.timestamps(true, true);

    tbl
      .integer("account_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("accounts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.scheme.dropTableIfExists("events");
};
