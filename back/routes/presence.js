//http://localhost:3000/api/presence

const controllers = require('../controllers/presence');

api.post('/presences', controllers.create);
api.put('/presences', controllers.update);

api.get('/presences/:id', controllers.find);
api.get('/presences', controllers.findAll);

api.delete('/presences/:id', controllers.delete);

