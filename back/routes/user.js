//http://localhost:3000/api/users

const controllers = require('../controllers/user');

api.post('/users', controllers.create);
api.put('/user/:id', controllers.update);
api.put('/userdel/:id', controllers.updatedel);

api.get('/users/:id', controllers.findById);
api.get('/user/:name', controllers.findByName);
api.get('/users', controllers.findAll);

api.delete('/users/:id', controllers.delete);

app.post('/authentification', controllers.authentification);
app.post('/register', controllers.register);