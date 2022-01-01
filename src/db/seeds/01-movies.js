const movies = require("./01_movies")

exports.seed = function(knex) {
  return knex
    .raw("TRUNCATE TABLE suppliers RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("movies").insert(movies);
    });
};
