//http://localhost:3000/api/users

const controllers = require('../controllers/user');

api.post('/users', controllers.create);
api.put('/users', controllers.update);

api.get('/users/:id', controllers.find);
api.get('/users', controllers.findAll);

api.delete('/users/:id', controllers.delete);

app.post('/authentification', controllers.authentification);
app.post('/register', controllers.register);