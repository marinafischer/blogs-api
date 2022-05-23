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
app.get('/user', middleware.authentication, routes.getUser);

app.use(middleware.error);

app.listen(port, () => console.log('ouvindo porta', port));
