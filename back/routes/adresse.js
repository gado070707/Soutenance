//http://localhost:3000/api/adresse

const controllers = require('../controllers/adresse');

api.post('/adresses', controllers.create);
api.put('/adresses', controllers.update);

api.get('/adresses/:id', controllers.find);
api.get('/adresses', controllers.findAll);

api.delete('/adresses/:id', controllers.delete);


