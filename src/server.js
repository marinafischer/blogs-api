require('dotenv').config();
const app = require('./api');
const routes = require('./routes');
const middleware = require('./middlewares');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', routes.login);

app.post('/user', routes.user);
app.get('/user/:id', middleware.authentication, routes.getUserById);
app.get('/user', middleware.authentication, routes.getUser);

app.post('/categories', middleware.authentication, routes.category);

app.use(middleware.error);

app.listen(port, () => console.log('ouvindo porta', port));
