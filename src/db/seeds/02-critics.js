const critics = require("./02_critics");

exports.seed = function(knex) {
  return knex
    .raw("TRUNCATE TABLE suppliers RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("critics").insert(critics);
    });
};
