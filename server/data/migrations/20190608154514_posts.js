exports.up = function(knex, Promise) {
  return knex.schema.createTable("comments", tbl => {
    tbl.increments();

    tbl.text("comment");

    tbl.timestamps(true, true);

    tbl
      .integer("thread_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("threads")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.scheme.dropTableIfExists("comments");
};
