
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'Lucas', email: 'lucas@teste.com', password_hash: '43211234'},
  
      ]);
    });
};
