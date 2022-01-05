const knex = require("../db/connection");

function list(){
    return knex("movies").select("*");
}

function read(){
    return knex()
}

module.exports={
    list,
    read,
}