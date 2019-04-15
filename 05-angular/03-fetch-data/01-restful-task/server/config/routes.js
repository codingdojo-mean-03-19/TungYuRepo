const taskcontroller = require('../controllers/tasks.js');

//Routes

module.exports = function(app) {
    app.get('/tasks', taskcontroller.index);

    app.get('/task/:id', taskcontroller.show);

    app.get('/task', taskcontroller.display);

    app.post('/task', taskcontroller.create);

    app.put('/task/:id', taskcontroller.edit);

    app.delete('/task/delete/:id', taskcontroller.delete);
}
