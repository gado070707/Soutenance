//http://localhost:3000/api/statut

const controllers = require('../controllers/statut');

api.post('/statuts', controllers.create);
api.put('/statuts', controllers.update);

api.get('/statuts/:id', controllers.find);
api.get('/statuts', controllers.findAll);

api.delete('/statuts/:id', controllers.delete);

