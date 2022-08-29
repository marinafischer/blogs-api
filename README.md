# About the Blogs API project!

Project made during the Trybe web development course.

The application is the creation of an API and a database for the production of content for a blog! The construction was made following the REST API standard, and with it it is possible to make a CRUD (**C**reate, **R**ead, **U**pdate and **D**elete).

## Technologies:

  - Node JS;
  - Express;
  - MySQL database;
  - ORM: sequelize;
  - validation library: Joi;
  - library for token: JWT;

## To get start:

  - Clone the repository: git@github.com:marinafischer/blogs-api.git

  - To start with node:
  - Install dependencies: npm install
  - Create the .env file in the project root with the bank variables and password for jwt
  - Create the bank and populate: npm run prestat
  - Start the application: npm start

  - To start with docker:
  - Run the command: docker-compose up -d --build
  - Run the command: docker exec -it blogs_api bash
    This command will give access to the container terminal, from here it is possible to run the same commands used with node (described above);

# Endpoints:

## POST `/login`
- The endpoint logs in (a user already registered in the bank) and generates an access token;
- The request body must follow the format below:
  ```json
  {
    "email": "lewishamilton@gmail.com",
    "password": "123456"
  }
  ```
- If any data is incorrect, status 400 and an error message are returned;
- When the login is successful, the status 201 and an access token are returned;

## POST `/user`
- The endpoint adds a new `user` to the database and generates an access token;
- The request body follows the format below:
  ```json
  {
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
  ```
- If any data is incorrect, status 400 and an error message are returned;
- When the login is successful, the status 200 and an access token are returned;
- 
## GET `/user`
- The endpoint queries the database and returns all users;
- To perform the request it is necessary to send a valid token through the request header by the Authorization key.

## GET `/user/:id`
- The endpoint queries the database and returns the specified user;
- To perform the request it is necessary to send a valid token through the request header by the Authorization key.

## POST `/categories`
- The endpoint adds a new `category` to the database;
- To perform the request it is necessary to send a valid token through the request header by the Authorization key;
- The request body must follow the format below:
  ```json
  {
    "name": "Typescript"
  }
  ```
- If any data is incorrect, status 400 and an error message are returned;
- When the login is successful, the status 201 is returned and the newly created data;

## GET `/categories`
- The endpoint queries the database and returns all categories;
- To perform the request it is necessary to send a valid token through the request header by the Authorization key;

## POST `/post`
- The endpoint adds a new `post` to the database;
- To perform the request it is necessary to send a valid token through the request header by the Authorization key;
- The request body must follow the format below:
  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "categoryIds": [1, 2]
  }
  ```
- If any data is incorrect, status 400 and an error message are returned;
- When the data is inserted, the status 201 is returned and the newly created data;

## GET `/post`
- The endpoint queries the database and returns all posts from the user;
- To perform the request it is necessary to send a valid token through the request header by the Authorization key;

## GET `/post/:id`
- The endpoint queries the database and returns the post specified in the request;
- To perform the request it is necessary to send a valid token through the request header by the Authorization key;

## PUT `/post/:id`
- The endpoint updates the database if the user is the owner of the post;
- To perform the request it is necessary to send a valid token through the request header by the Authorization key;
- The request body must follow the format below:
  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key"
  }
  ```
- If any data is incorrect, status 400 and an error message are returned;
- When the data is updated, the status 201 is returned and the updated data;

## DELETE `/post/:id`
- The endpoint deletes data from the database if the user is the owner of the post;
- To perform the request it is necessary to send a valid token through the request header by the Authorization key;

## DELETE `/user/me`
- The endpoint deletes the user from the database if the user is the same person logged in;
- To perform the request it is necessary to send a valid token through the request header by the Authorization key;

## GET `/post/search?q=:searchTerm`
- The endpoint queries the database and returns the filtered posts in the request;
- To perform the request it is necessary to send a valid token through the request header by the Authorization key;
