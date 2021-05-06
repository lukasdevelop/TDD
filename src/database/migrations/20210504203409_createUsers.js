
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.string('name');
        table.string('email');
        table.string('password_hash');
        table.timestamps();
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
