import express from "express";
import mongoose from "mongoose";
import movieRoutes from "./routes/movieRoutes.js";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Conexão com MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-movies")
.then(() => console.log("MongoDB conectado!"))
.catch(err => console.log(err));

// Rotas
app.use("/", movieRoutes);

const port = 4000;
app.listen(port, () => console.log(`API rodando em http://localhost:${port}`));
