//http://localhost:3000/api/type

const controllers = require('../controllers/type');

api.post('/types', controllers.create);
api.put('/types', controllers.update);

api.get('/types/:id', controllers.find);
api.get('/types', controllers.findAll);

api.delete('/types/:id', controllers.delete);


