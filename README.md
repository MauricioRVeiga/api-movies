# 🎥 API Movies - Full Stack Application

Uma aplicação completa de gerenciamento de filmes com **Backend REST API** (Node.js/Express/MongoDB) e **Frontend moderno** (React/Next.js).

Este projeto foi desenvolvido como atividade da disciplina de **Desenvolvimento Web III** da FATEC.

---

## 📸 Screenshots

![Interface Principal](link-para-screenshot-1.png)
![Cards de Filmes](link-para-screenshot-2.png)
![Design Responsivo](link-para-screenshot-3.png)

---

## 🌟 Funcionalidades

### Backend (API REST)
- ✅ **CRUD completo** de filmes
- ✅ Conexão com **MongoDB Atlas**
- ✅ Validação de dados
- ✅ CORS configurado para frontend
- ✅ Arquitetura MVC organizada

### Frontend (React/Next.js)
- ✅ **Listagem de filmes** consumindo API
- ✅ **Design moderno** com gradientes e animações
- ✅ **Sistema de rating visual** (cores por nota)
- ✅ **Componentes modulares** e reutilizáveis
- ✅ **CSS Modules** para estilização isolada
- ✅ **Responsivo** (mobile, tablet, desktop)
- ✅ **Loading states** e tratamento de erros
- ✅ **Hover effects** e transições suaves

---

## 🛠 Tecnologias Utilizadas

### Backend
- [Node.js](https://nodejs.org/) v18+
- [Express](https://expressjs.com/) v5.1.0
- [MongoDB](https://www.mongodb.com/) via Mongoose v8.18.0
- [dotenv](https://github.com/motdotla/dotenv) v17.2.2
- [Nodemon](https://nodemon.io/) v3.1.10 (desenvolvimento)

### Frontend
- [React](https://react.dev/) v19
- [Next.js](https://nextjs.org/) v16.0.3 (App Router)
- **CSS Modules** para estilização
- **Fetch API** para requisições HTTP

### DevOps
- [Concurrently](https://github.com/open-cli-tools/concurrently) v8.2.2 - Rodar backend e frontend simultaneamente

---

## 📁 Estrutura do Projeto (Monorepo)

```
api-movies/
│
├── backend/                      # API REST
│   ├── controllers/              # Controladores das rotas
│   │   └── movieController.js    # Lógica dos endpoints
│   ├── models/                   # Schemas do Mongoose
│   │   └── movie.js              # Model de Filme
│   ├── routes/                   # Definição das rotas
│   │   └── movieRoutes.js        # Rotas da API
│   ├── services/                 # Lógica de negócio
│   │   └── movieServices.js      # Operações no banco
│   ├── index.js                  # Servidor Express
│   └── package.json              # Dependências do backend
│
├── frontend/                     # Interface React/Next.js
│   ├── app/                      # App Router do Next.js
│   │   ├── page.js               # Página principal
│   │   ├── layout.js             # Layout global
│   │   ├── globals.css           # Estilos globais
│   │   └── page.module.css       # Estilos da página
│   ├── components/               # Componentes React
│   │   ├── Header.jsx            # Cabeçalho
│   │   ├── MovieList.jsx         # Grid de filmes
│   │   └── MovieCard.jsx         # Card individual
│   ├── styles/                   # CSS Modules
│   │   ├── Header.module.css
│   │   ├── MovieList.module.css
│   │   └── MovieCard.module.css
│   ├── public/                   # Arquivos estáticos
│   ├── next.config.js            # Configuração do Next.js
│   └── package.json              # Dependências do frontend
│
├── .env                          # Variáveis de ambiente
├── .gitignore                    # Arquivos ignorados pelo Git
├── package.json                  # Scripts principais do monorepo
└── README.md                     # Este arquivo
```

---

## 🚀 Como Executar o Projeto

### 📋 Pré-requisitos

- **Node.js** v18 ou superior ([Download](https://nodejs.org/))
- **MongoDB Atlas** (nuvem) ou MongoDB local
- **Git** ([Download](https://git-scm.com/))
- Editor de código (recomendado: [VS Code](https://code.visualstudio.com/))

---

### 1️⃣ Clonar o Repositório

```bash
git clone https://github.com/MauricioRVeiga/api-movies.git
cd api-movies
```

---

### 2️⃣ Configurar Variáveis de Ambiente

Crie um arquivo `.env` **na raiz do projeto**:

```env
MONGO_URI=mongodb+srv://seu-usuario:sua-senha@cluster.mongodb.net/?retryWrites=true&w=majority
PORT=4000
```

#### 🔹 MongoDB Atlas (Recomendado)
1. Acesse [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Crie um cluster gratuito
3. Em **Database Access**, crie um usuário
4. Em **Network Access**, adicione seu IP ou `0.0.0.0/0` (para teste)
5. Clique em **Connect** → **Drivers** → Copie a URI
6. Substitua `<password>` pela sua senha no `.env`

#### 🔹 MongoDB Local (Alternativa)
```env
MONGO_URI=mongodb://127.0.0.1:27017/moviesDB
PORT=4000
```

---

### 3️⃣ Instalar Dependências

```bash
# Instala dependências do root, backend e frontend de uma vez
npm run install:all
```

Este comando executa:
- `npm install` na raiz (instala concurrently)
- `cd backend && npm install` (instala dependências do backend)
- `cd frontend && npm install` (instala dependências do frontend)

---

### 4️⃣ Rodar o Projeto

```bash
# Inicia backend (porta 4000) e frontend (porta 3000) simultaneamente
npm run dev
```

**URLs disponíveis:**
- 🖥️ **Frontend**: http://localhost:3000
- 🔌 **Backend API**: http://localhost:4000
- 📊 **API JSON**: http://localhost:4000/movies

---

### 5️⃣ Adicionar Filmes de Teste (Opcional)

#### Via PowerShell (Windows):

```powershell
$body = @{
    title = "Interstellar"
    director = "Christopher Nolan"
    year = 2014
    genre = "Ficção Científica"
    rating = 9.0
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:4000/movie" -Method POST -Body $body -ContentType "application/json"
```

#### Via cURL (Linux/Mac):

```bash
curl -X POST http://localhost:4000/movie \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Interstellar",
    "director": "Christopher Nolan",
    "year": 2014,
    "genre": "Ficção Científica",
    "rating": 9.0
  }'
```

#### Via Postman/Insomnia:

**POST** `http://localhost:4000/movie`

```json
{
  "title": "Interstellar",
  "director": "Christopher Nolan",
  "year": 2014,
  "genre": "Ficção Científica",
  "rating": 9.0
}
```

---

## 📡 Documentação da API

### Base URL
```
http://localhost:4000
```

### Endpoints

| Método | Endpoint      | Descrição                      | Body (JSON)      |
|--------|---------------|--------------------------------|------------------|
| GET    | `/movies`     | Lista todos os filmes          | -                |
| GET    | `/movie/:id`  | Busca filme específico por ID  | -                |
| POST   | `/movie`      | Cadastra novo filme            | ✅ Obrigatório    |
| PUT    | `/movie/:id`  | Atualiza filme existente       | ✅ Obrigatório    |
| DELETE | `/movie/:id`  | Remove filme do banco          | -                |

### Schema do Filme

```json
{
  "title": "String (obrigatório)",
  "director": "String (obrigatório)",
  "year": "Number (obrigatório)",
  "genre": "String (obrigatório)",
  "rating": "Number (0-10)"
}
```

### Exemplos de Requisições

#### Listar Filmes
```bash
GET http://localhost:4000/movies
```

**Resposta:**
```json
{
  "movies": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "Interstellar",
      "director": "Christopher Nolan",
      "year": 2014,
      "genre": "Ficção Científica",
      "rating": 9.0
    }
  ]
}
```

#### Buscar Filme por ID
```bash
GET http://localhost:4000/movie/507f1f77bcf86cd799439011
```

#### Criar Filme
```bash
POST http://localhost:4000/movie
Content-Type: application/json

{
  "title": "Matrix",
  "director": "Wachowski Sisters",
  "year": 1999,
  "genre": "Ficção Científica",
  "rating": 8.7
}
```

#### Atualizar Filme
```bash
PUT http://localhost:4000/movie/507f1f77bcf86cd799439011
Content-Type: application/json

{
  "rating": 9.5
}
```

#### Deletar Filme
```bash
DELETE http://localhost:4000/movie/507f1f77bcf86cd799439011
```

---

## 🎨 Componentes React

### `Header.jsx`
Cabeçalho fixo da aplicação com logo animado e navegação.

**Props:** Nenhuma

**Features:**
- Logo com animação de rotação
- Links de navegação
- Sticky no scroll
- Responsivo

---

### `MovieList.jsx`
Grid responsivo que renderiza os cards de filmes.

**Props:**
- `movies` (Array) - Lista de filmes da API

**Features:**
- Grid adaptativo (1-3 colunas)
- Animação de entrada (fade in up)
- Responsivo

---

### `MovieCard.jsx`
Card individual com informações de cada filme.

**Props:**
- `movie` (Object) - Dados do filme

**Features:**
- Rating colorido por nota:
  - 🟢 Verde: nota ≥ 8.0
  - 🟠 Laranja: nota 6.0-7.9
  - 🔴 Vermelho: nota < 6.0
- Hover effect com elevação
- Barra animada no topo
- Layout organizado

---

## 🎨 CSS Modules

### Por que CSS Modules?

✅ **Escopo isolado** - Estilos não vazam entre componentes  
✅ **Sem conflitos** - Classes geradas automaticamente  
✅ **Manutenibilidade** - Estilos próximos aos componentes  
✅ **Performance** - Apenas CSS usado é carregado  

### Estrutura

```
frontend/styles/
├── Header.module.css      → Estilos do Header
├── MovieList.module.css   → Estilos do Grid
└── MovieCard.module.css   → Estilos dos Cards

frontend/app/
├── globals.css            → Reset e estilos globais
└── page.module.css        → Estilos da página principal
```

### Exemplo de Uso

```jsx
import styles from '@/styles/MovieCard.module.css';

export default function MovieCard() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Filme</h3>
    </div>
  );
}
```

---

## 📦 Scripts Disponíveis

### Root (Monorepo)

```bash
# Rodar backend + frontend simultaneamente
npm run dev

# Rodar apenas o backend (API)
npm run dev:backend

# Rodar apenas o frontend (Interface)
npm run dev:frontend

# Instalar todas as dependências (root + backend + frontend)
npm run install:all
```

### Backend

```bash
cd backend

# Rodar com Nodemon (auto-reload)
npm start

# Rodar sem Nodemon
node index.js
```

### Frontend

```bash
cd frontend

# Modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar versão de produção
npm start
```

---

## 🔧 Troubleshooting (Resolução de Problemas)

### ❌ Backend não conecta ao MongoDB

**Problema:** `MongoServerError: bad auth`

**Solução:**
1. Verifique se a senha no `.env` está correta
2. No MongoDB Atlas, vá em **Network Access** e adicione seu IP
3. Teste a conexão usando MongoDB Compass

---

### ❌ Frontend não carrega filmes

**Problema:** `Failed to fetch`

**Solução:**
1. Certifique-se que o backend está rodando (porta 4000)
2. Verifique se há filmes no banco: http://localhost:4000/movies
3. Abra DevTools (F12) → Console para ver erros

---

### ❌ Erro de CORS

**Problema:** `Access-Control-Allow-Origin`

**Solução:**
Verifique se o `backend/index.js` tem o middleware de CORS:

```javascript
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
```

---

### ❌ Porta 3000 ou 4000 já em uso

**Solução (Windows PowerShell):**
```powershell
# Ver processos usando a porta
netstat -ano | findstr :3000

# Matar processo (substitua PID pelo número encontrado)
taskkill /PID <número> /F
```

**Solução (Linux/Mac):**
```bash
# Ver processo na porta 3000
lsof -i :3000

# Matar processo
kill -9 <PID>
```

---

### ❌ Módulos não encontrados

**Problema:** `Cannot find module '@/components/Header'`

**Solução:**
```bash
# Reinstalar dependências
cd frontend
rm -rf node_modules package-lock.json
npm install

# OU use o script do root
cd ..
npm run install:all
```

---

## 🌐 Deploy (Opcional)

### Backend - Render.com

1. Crie conta no [Render](https://render.com/)
2. New → Web Service
3. Conecte seu repositório GitHub
4. Configure:
   - **Build Command:** `cd backend && npm install`
   - **Start Command:** `cd backend && node index.js`
   - **Environment Variables:** Adicione `MONGO_URI`

### Frontend - Vercel

1. Instale Vercel CLI: `npm i -g vercel`
2. Na pasta `frontend`: `vercel`
3. Configure o projeto e faça deploy

---

## 🎓 Informações Acadêmicas

### Requisitos Atendidos

✅ **Backend em Node.js/Express** com MongoDB  
✅ **Frontend em React/Next.js**  
✅ **Consumo de API REST**  
✅ **Componentes modulares**  
✅ **CSS Modules** para estilização  
✅ **Design responsivo**  
✅ **Arquitetura organizada** (MVC no backend)  
✅ **Código limpo e documentado**  

### Diferenciais Implementados

🌟 **Monorepo** bem estruturado  
🌟 **Animações e transições** suaves  
🌟 **Sistema de rating visual** por cores  
🌟 **Loading states** e error handling  
🌟 **Design moderno** com gradientes  
🌟 **Documentação completa**  

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit suas mudanças: `git commit -m 'Adiciona nova funcionalidade'`
4. Push para a branch: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença **ISC**.

---

## 👨‍💻 Autor

**Mauricio R. Veiga**  
📧 Email: [mauricio@goldcreditsa.com.br]  
🔗 GitHub: [github.com/MauricioRVeiga](https://github.com/MauricioRVeiga)  
🎓 FATEC - Desenvolvimento Web III

---

## 🔗 Links Úteis

- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação React](https://react.dev/)
- [Documentação Express](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Mongoose Docs](https://mongoosejs.com/docs/)
- [CSS Modules](https://github.com/css-modules/css-modules)

---

## 📊 Status do Projeto

🟢 **Versão:** 1.0.1  
🟢 **Status:** Concluído e Funcional  
🟢 **Última atualização:** Novembro 2024  

---

## 🙏 Agradecimentos

- FATEC - Pela oportunidade de aprendizado
- Professores - Pelo conhecimento compartilhado
- Comunidade Open Source - Pelas ferramentas incríveis

---

<div align="center">

**⭐ Se este projeto te ajudou, deixe uma estrela no GitHub! ⭐**

Feito com ❤️ e ☕ por [Mauricio R. Veiga](https://github.com/MauricioRVeiga)

</div>