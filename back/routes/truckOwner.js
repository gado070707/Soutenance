//http://localhost:3000/api/truckOwner

const controllers = require('../controllers/truckOwner');

api.post('/truckowner', controllers.create);
api.put('/truckowner', controllers.update);

api.get('/truckowner/:id', controllers.find);
api.get('/truckowner', controllers.findAll);

api.delete('/truckowner/:id', controllers.delete);


