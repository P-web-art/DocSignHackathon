exports.up = function(knex, Promise) {
  return knex.schema.createTable("posts", tbl => {
    tbl.increments();

    tbl.text("post");

    tbl.timestamps(true, true);

    tbl
      .integer("thread_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("threads")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl
      .integer("account_id")
      .unsigned()
      .references("id")
      .inTable("accounts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.scheme.dropTableIfExists("posts");
};
