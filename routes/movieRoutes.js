import express from "express";
import movieController from "../controllers/movieController.js";

const movieRoutes = express.Router();

movieRoutes.get("/movies", movieController.getAllMovies);
movieRoutes.get("/movie/:id", movieController.getOneMovie);
movieRoutes.post("/movie", movieController.createMovie);
movieRoutes.put("/movie/:id", movieController.updateMovie);
movieRoutes.delete("/movie/:id", movieController.deleteMovie);

export default movieRoutes;