# 🎥 API Movies

Uma API RESTful para gerenciamento de filmes, desenvolvida em **Node.js**, **Express** e **MongoDB**.  
Este projeto foi criado como parte das atividades da disciplina de Desenvolvimento Web III (FATEC).

---

## 📌 Funcionalidades

- Listar todos os filmes
- Buscar um filme por ID
- Cadastrar um novo filme
- Atualizar informações de um filme existente
- Remover um filme do banco de dados

---

## 🛠 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://nodemon.io/) (para desenvolvimento)

---

## 📂 Estrutura do Projeto

api-movies/ ├── models/ # Modelos do Mongoose │
               └── Movie.js 
            ├── services/ # Lógica de negócio 
            │ └── movieService.js 
            ├── controllers/ # Controladores das rotas 
            │ └── movieController.js  
            ├── routes/ # Definição das rotas  
            │ └── movieRoutes.js  
            ├── index.js # Arquivo principal  
            ├── package.json 

---

## 🚀 Como Executar o Projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/MauricioRVeiga/api-movies.git
cd api-movies

2️⃣ Instalar dependências
bash
npm install

3️⃣ Configurar o MongoDB
Certifique-se de que o MongoDB está rodando localmente na porta padrão (27017). Se quiser usar o MongoDB Atlas, altere a string de conexão no arquivo index.js.

4️⃣ Rodar o servidor
bash
npm start
A API estará disponível em:

Código
http://localhost:4000
📡 Endpoints
Método	Rota	Descrição
GET	/movies	Lista todos os filmes
GET	/movie/:id	Busca um filme por ID
POST	/movie	Cadastra um novo filme
PUT	/movie/:id	Atualiza um filme existente
DELETE	/movie/:id	Remove um filme
📄 Exemplo de JSON para POST/PUT
json
{
  "title": "Interstellar",
  "director": "Christopher Nolan",
  "year": 2014,
  "genre": "Ficção Científica",
  "rating": 9.0
}
🤝 Contribuindo
Sinta-se à vontade para abrir issues e enviar pull requests com melhorias.
