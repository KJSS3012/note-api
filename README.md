# NoteAPI

## Descrição

A NoteAPI é uma API projetada para ser integrada a um sistema React de cadastramento de notas diárias, funcionando como o backend dessa aplicação. Ela permite a gestão de dados de forma eficiente e segura, fornecendo os serviços necessários para a comunicação entre a interface do usuário e o banco de dados.

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB com Mongoose
- JWT (JSON Web Tokens)

## Segurança das Senhas

As senhas dos usuários são armazenadas de forma segura na NoteAPI. Utilizei a biblioteca bcrypt para transformar as senhas em hashes antes de armazená-las no banco de dados. Isso ajuda a garantir a segurança dos dados dos usuários, protegendo suas informações confidenciais contra acesso não autorizado.

## Visão Geral

A API é uma aplicação Node.js desenvolvida com o framework Express.js. Ela atua como um servidor para gerenciar requisições provenientes de uma aplicação React (ainda não desenvolvida). A autenticação é implementada usando JWT (JSON Web Tokens) para garantir a segurança das operações. O banco de dados utilizado é o MongoDB, sendo o acesso a ele feito através do Mongoose.

## Rotas

### Users

- **POST /users/register**: Rota para cadastrar um novo usuário. Recebe o `name`, `email` e `password` do usuário.

  ```json
  {
    "name": "Teste Post",
    "email": "testepost@gmail.com",
    "password": "123456789"
  }
  ```

- **POST /users/login**: Rota para fazer login do usuário. Recebe o `email` e `password` do usuário.

  ```json
  {
    "email": "testepost@gmail.com",
    "password": "123456789"
  }
  ```

### Notes

- **GET /notes**: Retorna todas as notas cadastradas.
- **GET /notes/:id**: Retorna uma nota específica com o ID fornecido.
- **POST /notes**: Rota para cadastrar uma nova nota. Recebe o `title` e `body` da nota no corpo da requisição.

  ```json
  {
    "title": "test",
    "body": "test body"
  }
  ```

- **PUT /notes/:id**: Atualiza uma nota existente com o ID fornecido.

  ```json
  {
    "title": "test",
    "body": "test body"
  }
  ```

- **DELETE /notes/:id**: Remove uma nota com o ID fornecido.

## Requer Autenticação

Para acessar as rotas destinadas as notas, é necessário incluir o token de acesso (`x-access-token`) nos headers da requisição. Este token é gerado no momento do login do usuário e deve ser enviado em todas as requisições subsequentes que exigem autenticação.
