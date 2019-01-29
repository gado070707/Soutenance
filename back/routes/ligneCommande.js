//http://localhost:3000/api/ligneCommande

const controllers = require('../controllers/ligneCommande');

api.post('/ligneCommandes', controllers.create);
api.put('/ligneCommandes', controllers.update);

api.get('/ligneCommandes/:id', controllers.find);
api.get('/ligneCommandes', controllers.findAll);

api.delete('/ligneCommandes/:id', controllers.delete);


