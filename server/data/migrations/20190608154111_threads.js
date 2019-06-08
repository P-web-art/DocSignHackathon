exports.up = function(knex, Promise) {
  return knex.schema.createTable("threads", tbl => {
    tbl.increments();

    tbl.string("title", 128).notNullable();
    tbl.text("description");
    tbl.text("location");

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
  return knex.scheme.dropTableIfExists("threads");
};
