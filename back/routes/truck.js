//http://localhost:3000/api/truck

const controllers = require('../controllers/truck');

api.post('/trucks', controllers.create);
api.put('/trucks', controllers.update);

api.get('/trucksByOwner/:id', controllers.findAllByTruckowner);
api.get('/trucks', controllers.findAll);
api.delete('/trucks/:id', controllers.delete);
api.get('/trucks/:id', controllers.find);