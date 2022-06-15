# Sobre o projeto API de Blogs!

Projeto feito durante o curso de desenvolvimento web da Trybe.

Foi desenvolvida uma API e um banco de dados para a produção de conteúdo para um blog! 

A construção foi feita seguindo o padrão REST API, e com ela é possível fazer um CRUD (**C**reate, **R**ead, **U**pdate e **D**elete).

## Tecnologias usadas: 
  - Node JS;
  - Express;
  - Banco de dados MySQL;
  - ORM: sequelize;
  - biblioteca de validações: Joi;
  - biblioteca para token: JWT;

## Para começar:

- Clone o repositório: git@github.com:marinafischer/blogs-api.git

- Para iniciar com node:
  - Instale as dependencias: npm install
  - Crie o aquivo .env na raiz do projeto com as variáveis do banco e senha para o jwt
  - Crie o banco e popule: npm run prestart
  - Inicie a aplicação: npm start

- Para iniciar com docker:
  - Rode o comando: docker-compose up -d --build
  - Rode o comando: docker exec -it blogs_api bash
    Esse comando dará acesso ao terminal do container, a partir daqui é possível rodar os mesmos comandos usados com o node (descritos acima);

# Endpoints:

## POST `/login`
- O endpoint realiza o login (de um usuário já cadastrado no banco) e gera um token de acesso;
- O corpo da requisição deve seguir o formato abaixo:
  ```json
  {
    "email": "lewishamilton@gmail.com",
    "password": "123456"
  }
  ```
- Caso algum dado esteja incorreto, é retornado o status 400 e uma mensagem de erro;
- Quando o login ocorrer com sucesso é retornado o status 201 e um token de acesso;

## POST `/user`
- O endpoint adiciona um novo `user` ao banco de dados e gera um token de acesso;
- O corpo da requisição segue o formato abaixo:
  ```json
  {
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
  ```
- Caso algum dado esteja incorreto, é retornado o status 400 e uma mensagem de erro;
- Quando o login ocorrer com sucesso é retornado o status 200 e um token de acesso;

## GET `/user`
- O endpoint consulta o banco de dados e retorna todos usuários;
- Para realizar a requisição é necessário enviar um token válido pelo cabeçalho da requisição pela chave Authorization.

## GET `/user/:id`
- O endpoint consulta o banco de dados e retorna o usuário especificado;
- Para realizar a requisição é necessário enviar um token válido pelo cabeçalho da requisição pela chave Authorization.

## POST `/categories`
- O endpoint adiciona uma nova `category` ao banco de dados;
- Para realizar a requisição é necessário enviar um token válido pelo cabeçalho da requisição pela chave Authorization;
- O corpo da requisição deve seguir o formato abaixo:
  ```json
  {
    "name": "Typescript"
  }
  ```
- Caso algum dado esteja incorreto, é retornado o status 400 e uma mensagem de erro;
- Quando o login ocorrer com sucesso é retornado o status 201 e os dados recem criados;

## GET `/categories`
- O endpoint consulta o banco de dados e retorna todas categorias;
- Para realizar a requisição é necessário enviar um token válido pelo cabeçalho da requisição pela chave Authorization;

## POST `/post`
- O endpoint adiciona um novo `post` ao banco de dados;
- Para realizar a requisição é necessário enviar um token válido pelo cabeçalho da requisição pela chave Authorization;
- O corpo da requisição deve seguir o formato abaixo:
  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "categoryIds": [1, 2]
  }
  ```
- Caso algum dado esteja incorreto, é retornado o status 400 e uma mensagem de erro;
- Quando o dado for inserido é retornado o status 201 e os dados recem criados;

## GET `/post`
- O endpoint consulta o banco de dados e retorna todos posts da pessoa usuária;
- Para realizar a requisição é necessário enviar um token válido pelo cabeçalho da requisição pela chave Authorization;

## GET `/post/:id`
- O endpoint consulta o banco de dados e retorna o post especificado na requisição;
- Para realizar a requisição é necessário enviar um token válido pelo cabeçalho da requisição pela chave Authorization;

## PUT `/post/:id`
- O endpoint atualiza o banco de dados caso a pessoa usuária seja a dona do post;
- Para realizar a requisição é necessário enviar um token válido pelo cabeçalho da requisição pela chave Authorization;
- O corpo da requisição deve seguir o formato abaixo:
  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key"
  }
  ```
- Caso algum dado esteja incorreto, é retornado o status 400 e uma mensagem de erro;
- Quando o dado for atualizado é retornado o status 201 e os dados atualizados;

## DELETE `/post/:id`
- O endpoint delete um dado do banco de dados caso a pessoa usuária seja a dona do post;
- Para realizar a requisição é necessário enviar um token válido pelo cabeçalho da requisição pela chave Authorization;

## DELETE `/user/me`
- O endpoint delete o usuário do banco de dados caso a pessoa usuária seja a mesma logada;
- Para realizar a requisição é necessário enviar um token válido pelo cabeçalho da requisição pela chave Authorization;

## GET `/post/search?q=:searchTerm`
- O endpoint consulta o banco de dados e retorna os posts filtrados na requisição;
- Para realizar a requisição é necessário enviar um token válido pelo cabeçalho da requisição pela chave Authorization;