import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import movieRoutes from "./routes/movieRoutes.js";

// Configurar __dirname para ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Carrega .env da RAIZ do projeto
dotenv.config({ path: join(__dirname, '..', '.env') });

const app = express();

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Log para debug
console.log('🔍 MONGO_URI:', process.env.MONGO_URI ? '✅ Definida' : '❌ Não definida');

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Conectado ao MongoDB!"))
.catch((err) => console.error("❌ Erro na conexão:", err));

app.use("/", movieRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`🚀 API rodando em http://localhost:${port}`);
});