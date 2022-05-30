require('dotenv').config();
const app = require('./api');
const controller = require('./controllers');
const middleware = require('./middlewares');
const router = require('./routes');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', middleware.loginMiddleware, controller.login);

app.use(router);

app.use(middleware.error);

app.listen(port, () => console.log('ouvindo porta', port));
