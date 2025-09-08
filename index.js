import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import movieRoutes from "./routes/movieRoutes.js";

// Carrega variáveis do .env
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Conexão com MongoDB Atlas usando variável de ambiente
mongoose.connect(process.env.MONGO_URI, {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(() => console.log("✅ Conectado ao MongoDB Atlas!"))
.catch((err) => console.error("❌ Erro na conexão:", err));

// Rotas
app.use("/", movieRoutes);

// Inicializa servidor
const port = process.env.PORT || 4000;
app.listen(port, () => {
console.log(`🚀 API rodando em http://localhost:${port}`);
});
