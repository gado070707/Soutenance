//http://localhost:3000/api/role

const controllers = require('../controllers/role');

api.post('/roles', controllers.create);
api.put('/roles', controllers.update);

api.get('/roles/:id', controllers.find);
api.get('/roles', controllers.findAll);

api.delete('/roles/:id', controllers.delete);


