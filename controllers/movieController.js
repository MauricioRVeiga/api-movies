import movieService from "../services/movieService.js";
import { ObjectId } from "mongodb";

const getAllMovies = async (req, res) => {
  try {
    const movies = await movieService.getAll();
    res.status(200).json({ movies });
  } catch {
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const getOneMovie = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) return res.sendStatus(400);
    const movie = await movieService.getOne(req.params.id);
    if (!movie) return res.sendStatus(404);
    res.status(200).json({ movie });
  } catch {
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const createMovie = async (req, res) => {
  try {
    await movieService.create(req.body);
    res.sendStatus(201);
  } catch {
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const updateMovie = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) return res.sendStatus(400);
    const updated = await movieService.update(req.params.id, req.body);
    res.status(200).json({ updated });
  } catch {
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const deleteMovie = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) return res.sendStatus(400);
    await movieService.delete(req.params.id);
    res.sendStatus(204);
  } catch {
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

export default { getAllMovies, getOneMovie, createMovie, updateMovie, deleteMovie };
