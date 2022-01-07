if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/errorHandler");
const moviesRouter = require("./movies/movies.router");
const reviewsRouter = require("./reviews/reviews.router");
const theatersRouter = require("./theaters/theaters.router");

app.use(cors());
app.use(express.json());

app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
app.use("/theaters", theatersRouter);

app.use(function notFound(request, response, next) {
    console.log("app error", request.body)  
      next({ status: 404, message: `Path not found: ${request.originalUrl}` });
    });
app.use(notFound);
app.use(errorHandler);

module.exports = app;