const theaters = require("./04_theaters");

exports.seed = function(knex) {
  return knex
    .raw("TRUNCATE TABLE suppliers RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("theaters").insert(theaters);
    });
};
