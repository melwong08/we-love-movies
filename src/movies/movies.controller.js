const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const { reset } = require("nodemon");

async function list(req, res, next) {
    const data = await moviesService.list(req.query.is_showing);
    res.json({ data })
}

async function movieExists(req, res, next){
    const {movieId} = req.params;
    const movie = await moviesService.read(movieId);
    if(movie) {
        res.locals.movieId = movieId;
        res.locals.movie = movie;
        return next();
    }
    next({status: 404, message: `Movie cannot be found.`})
}

function read(req, res){
    const {movie} = res.locals;
    res.json({data:movie})
}

module.exports = {
  read: [asyncErrorBoundary(movieExists), read],
  list: asyncErrorBoundary(list),
};