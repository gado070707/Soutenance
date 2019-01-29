//http://localhost:3000/api/product

const controllers = require('../controllers/product');

api.post('/products', controllers.create);
api.put('/products', controllers.update);

api.get('/products/:id', controllers.find);
api.get('/products', controllers.findAll);

api.delete('/products/:id', controllers.delete);


app.post('/register', controllers.register);