const reviews = require("./03_reviews");

exports.seed = function(knex) {
  return knex
    .raw("TRUNCATE TABLE suppliers RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("reviews").insert(reviews);
    });
};
