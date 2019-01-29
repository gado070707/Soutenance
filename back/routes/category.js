//http://localhost:3000/api/category

const controllers = require('../controllers/category');

api.post('/categories', controllers.create);
api.put('/categories', controllers.update);

api.get('/categories/:id', controllers.find);
api.get('/categories', controllers.findAll);

api.delete('/categories/:id', controllers.delete);


