//http://localhost:3000/api/truckOwner

const controllers = require('../controllers/truckOwner');

api.post('/truckOwners', controllers.create);
api.put('/truckOwners', controllers.update);

api.get('/truckOwners/:id', controllers.find);
api.get('/truckOwners', controllers.findAll);

api.delete('/truckOwners/:id', controllers.delete);


