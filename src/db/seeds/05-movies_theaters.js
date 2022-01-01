const moviesTheaters = require("./05_movies_theaters");

exports.seed = function(knex) {
  return knex
    .raw("TRUNCATE TABLE suppliers RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("moviesTheaters").insert(moviesTheaters);
    });
};
