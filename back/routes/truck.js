//http://localhost:3000/api/truck

const controllers = require('../controllers/truck');

api.post('/trucks', controllers.create);
api.put('/trucks', controllers.update);

api.get('/trucksByOwner/:id', controllers.findAllByTruckowner);
api.get('/trucks', controllers.findAll);

<<<<<<< HEAD
api.delete('/trucks/:id', controllers.delete);
api.get('/trucks/:id', controllers.find);
=======

api.delete('/trucks/:id', controllers.delete);
>>>>>>> a55294830ab69d0b0dd2699f79f6f903e11551ae
