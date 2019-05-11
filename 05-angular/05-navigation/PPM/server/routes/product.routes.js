const ProductController = require('../controllers/product.controller');

module.exports = function(app){
  app.get('/api/products', ProductController.index);
  app.get('/api/product/:id', ProductController.show);
  app.post('/api/product', ProductController.create);
  app.put('/api/product/:id', ProductController.edit);
  app.delete('/api/product/:id', ProductController.destroy);
}
