# NoteAPI

## Descrição

A NoteAPI é uma API projetada para ser integrada a um sistema React, funcionando como o backend dessa aplicação. Ela permite a gestão de dados de forma eficiente e segura, fornecendo os serviços necessários para a comunicação entre a interface do usuário e o banco de dados. É uma escolha ideal para quem está começando a desenvolver APIs em Express.

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB com Mongoose
- JWT (JSON Web Tokens)

## Segurança das Senhas

As senhas dos usuários são armazenadas de forma segura na NoteAPI. Utilizamos a biblioteca bcrypt para transformar as senhas em hashes antes de armazená-las no banco de dados. Isso ajuda a garantir a segurança dos dados dos usuários, protegendo suas informações confidenciais contra acesso não autorizado.

## Visão Geral

A API é uma aplicação Node.js desenvolvida com o framework Express.js. Ela atua como um servidor para gerenciar requisições provenientes de uma aplicação React (ainda não desenvolvida). A autenticação é implementada usando JWT (JSON Web Tokens) para garantir a segurança das operações. O banco de dados utilizado é o MongoDB, sendo o acesso a ele feito através do Mongoose.

## Rotas

Aqui estão as principais rotas disponíveis na API:

- **GET /api/recurso**: Retorna todos os recursos.
- **GET /api/recurso/:id**: Retorna um recurso específico com o ID fornecido.
- **POST /api/recurso**: Cria um novo recurso.
- **PUT /api/recurso/:id**: Atualiza um recurso existente com o ID fornecido.
- **DELETE /api/recurso/:id**: Remove um recurso com o ID fornecido.

## Contribuindo

Se você gostaria de contribuir com este projeto, fique à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).
