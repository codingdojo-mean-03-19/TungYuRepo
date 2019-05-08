const Author = require('../models/author.model');
const { Http } = require('@status/codes');

module.exports = {
  index: (_req, res) =>{
    Author.find()
    .then(data => { res.json(data) })
    .catch(error => res.status(Http.InternalServerError).json(error))
  },
  create: (req, res) => {
    Author.create(req.body)
    .then(data => res.json(data))
    .catch(error => {
      const errors = Object.keys(error.errors).map(key => error.errors[key].message);
      res.status(Http.UnprocessableEntity).json(errors);
    })
  },
  show: (req, res) => {
    Author.findById(req.params.id)
    .then(data => res.json(data))
    .catch(error => res.status(Http.UnavailableForLegalReasons).json(error));
  },
  edit: (req, res) => {
    Author.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(data => res.json(data))
    .catch(error => res.status(Http.UnprocessableEntity).json(error));
  },
  destroy: (req, res) =>{
    Author.findByIdAndRemove(req.params.id)
    .then(data => res.json(data))
    .catch(error => res.status(Http.ResetContent).json(error));
  }
}
