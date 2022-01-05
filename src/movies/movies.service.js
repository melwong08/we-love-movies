const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

function list(is_showing){
    return knex("movies")
    .select("movies.*")
    .modify((queryBuilder) => 
        if(is_showing){
            queryBuilder.join("movies_theaters", "movies.movies_id", "movies_theaters.movie_id")
            .where({"movies_theaters.is_showing": true})
            .groupBy("movies.movies_id")
        }
    )
}

function read(movie_id){
    return knex("movies").select("*").where({movie_id}).first();
}

module.exports={
    list,
    read,
}