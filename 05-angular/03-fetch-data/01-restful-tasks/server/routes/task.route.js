const { taskController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/tasks', taskController.index)
  .post('/task', taskController.create)
  .get('/:task_id', taskController.show)
  .put('/:task_id', taskController.update)
  .delete('/:task_id', taskController.destroy);
