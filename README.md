# 📚 Livraria Livre

Uma API RESTful desenvolvida com **Node.js**, **Express** e **MongoDB**, que permite o gerenciamento de uma livraria fictícia. Nela, é possível realizar o CRUD (Create, Read, Update, Delete) de livros e autores, com persistência de dados em um banco MongoDB na nuvem (MongoDB Atlas).

O projeto segue a arquitetura MVC (Model–View–Controller), uma abordagem que separa responsabilidades e facilita a manutenção e escalabilidade da aplicação:

Model (Modelo): responsável por definir os esquemas dos dados com Mongoose e realizar operações no banco.

Controller (Controlador): lida com a lógica de negócio, processando as requisições e interagindo com os Models.

Routes (Rotas): atua como a camada de entrada da API, direcionando as requisições HTTP para os controllers adequados.

Embora APIs não possuam uma camada de View no sentido tradicional (HTML), a separação entre Routes e Controllers cumpre esse papel de organização e desacoplamento da lógica.

---

## 🛠 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript
- **Express** – Framework minimalista para APIs REST
- **MongoDB Atlas** – Banco de dados NoSQL na nuvem
- **Mongoose** – ODM para modelar os dados no MongoDB
- **Nodemon** (dev) – Monitoramento de alterações em tempo real

---

## 🧱 Arquitetura da Aplicação

```bash
Livraria-Livre/
│
├── src/
│ ├── config/ # Configurações como conexão com MongoDB
│ │ └── db.js
│ │
│ ├── controllers/ # Lógica das rotas (controllers)
│ │ ├── autorController.js
│ │ └── livroController.js
│ │
│ ├── models/ # Modelos Mongoose
│ │ ├── Autor.js
│ │ └── Livro.js
│ │
│ ├── routes/ # Definição das rotas
│ │ ├── autorRoutes.js
│ │ └── livroRoutes.js
│ │
│ ├── middlewares/ # Middlewares (validação, erros, etc)
│ │ └── errorHandler.js
│ │
│ └── app.js # Configuração principal do Express
│
├── .env # Variáveis de ambiente (porta, MongoDB URI)
├── server.js # Ponto de entrada da aplicação
├── package.json
└── README.md
```

---

## ✅ Funcionalidades da API

### 📖 Livros

- [x] Criar livro
- [x] Listar todos os livros
- [x] Buscar por ID
- [x] Atualizar livro
- [x] Remover livro

### 👤 Autores

- [x] Criar autor
- [x] Listar todos os autores
- [x] Buscar por ID
- [x] Atualizar autor
- [x] Remover autor

---

## 🔧 Como Instalar e Executar Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/LeandroHenks/Livraria-Livre.git
cd Livraria-Livre
```

### 2. Instale as dependências
```bash 
npm install
```

### 3. Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
```bash 
PORT=3000
MONGODB_URI=mongodb+srv://<usuario>:<senha>@<seu-cluster>.mongodb.net/livraria?retryWrites=true&w=majority
```

### 4. Inicie o servidor
```bash 
npm start
```
### 5. Em desenvolvimento (com recarregamento automático via nodemon):
```bash 
npm run dev
```

## 📬 Endpoints da API

Abaixo estão os principais endpoints disponíveis para os recursos **Autores** e **Livros**.

### 🔹 Autores

| Método | Rota           | Descrição               |
|--------|----------------|--------------------------|
| GET    | `/autores`     | Lista todos os autores   |
| GET    | `/autores/:id` | Busca um autor por ID    |
| POST   | `/autores`     | Cria um novo autor       |
| PUT    | `/autores/:id` | Atualiza os dados do autor |
| DELETE | `/autores/:id` | Remove um autor          |

---

### 🔹 Livros

| Método | Rota           | Descrição               |
|--------|----------------|--------------------------|
| GET    | `/livros`      | Lista todos os livros    |
| GET    | `/livros/:id`  | Busca um livro por ID    |
| POST   | `/livros`      | Cria um novo livro       |
| PUT    | `/livros/:id`  | Atualiza os dados do livro |
| DELETE | `/livros/:id`  | Remove um livro          |

---

### 🧪 Testando com o Insomnia/Postman

1. Inicie o servidor local 
```Bash
    npm run dev
```
2. Abra o Insomnia ou Postman
3. Faça requisições para (http://localhost:3000/livros) ou (http://localhost:3000/autores)

### Exemplo de POST /livros

#Json
```Bash
{
  "titulo": "Dom Casmurro",
  "editora": "Editora X",
  "preco": 29.90,
  "autor": "665f1aefb7e9ad5c5a18a5e0"
}
```

### 🙋‍♂️ Contribuindo
Sinta-se à vontade para abrir Issues ou enviar Pull Requests com melhorias e sugestões.

