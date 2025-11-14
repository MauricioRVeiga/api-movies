import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
title: String,
director: String,
year: Number,
genre: String,
rating: Number
});

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
