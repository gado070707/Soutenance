//http://localhost:3000/api/ligneCarte

const controllers = require('../controllers/ligneCarte');

api.post('/ligneCartes', controllers.create);
api.put('/ligneCartes', controllers.update);

api.get('/ligneCartes/:id', controllers.find);
api.get('/ligneCartes', controllers.findAll);

api.delete('/ligneCartes/:id', controllers.delete);


