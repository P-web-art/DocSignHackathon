exports.up = function(knex, Promise) {
  return knex.schema.createTable("accounts", tbl => {
    tbl.increments();

    tbl
      .string("email", 128)
      .notNullable()
      .unique();

    tbl.string("name", 128).notNullable();

    tbl.string("password", 128).notNullable();
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.scheme.dropTableIfExists("accounts");
};
