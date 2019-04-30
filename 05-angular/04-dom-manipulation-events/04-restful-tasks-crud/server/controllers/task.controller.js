const Task = require('mongoose').model('Task');
const { Http } = require('@status/codes');


module.exports = {
  //retrieve all data
  index(_req, res){
    Task.find({})
    .then(result => res.json(result))
    .catch(error => res.status(Http.InternalServerError).json(error))
  },
  //create new data
  create(req, res){
    Task.create(req.body)
    .then(result => res.json(result))
    .catch(error => {
      const errors = Object.keys(error.errors).map(key => error.errors[key].message);
      res.status(Http.UnprocessableEntity).json(errors);
    })
  },
  //show data
  show(req, res){
    const { task_id: taskId } = req.params;
    Task.findById(taskId)
    .then(result => res.json(result))
    .catch(error => status(Http.UnavailableForLegalReasons).json(error));
  },
  //update data
  update(req, res){
    const { task_id: taskId } = req.params;
    Task.findByIdAndUpdate(taskId, req.body, { new: true })
    .then(result => res.json(result))
    .catch(error => status(Http.UnprocessableEntity).json(error));
  },
  //delete data
  destroy(_req, res){
    const { task_id: taskId } = req.params;
    Task.findByIdAndDelete(taskId)
    .then(result => res.json(result))
    .catch(error => res.status(Http.ResetContent).json(error));
  },
}
