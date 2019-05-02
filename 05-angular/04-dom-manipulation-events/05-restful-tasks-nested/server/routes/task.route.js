const taskController = require('../controllers/task.controller');

module.exports = function(app){
  app.get('/tasks', taskController.index);

  app.get('/tasks/:id', taskController.show);

  app.post('/tasks', taskController.create);

  app.put('/tasks/:id', taskController.edit);

  app.delete('/tasks/:id', taskController.destroy);
}
