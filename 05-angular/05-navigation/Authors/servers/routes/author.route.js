const AuthorController = require('../controllers/author.controller');

module.exports = function(app){

  app.get('/authors', AuthorController.index );
  app.post('/author', AuthorController.create );
  app.get('/author/:id', AuthorController.show );
  app.put('/author/:id', AuthorController.edit );
  app.delete('/author/:id', AuthorController.destroy );

}
