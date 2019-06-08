exports.up = function(knex, Promise) {
  return knex.schema.createTable("volunteers", tbl => {
    tbl.increments();

    tbl
      .integer("account_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("accounts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl
      .integer("event_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("events")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.scheme.dropTableIfExists("volunteers");
};
