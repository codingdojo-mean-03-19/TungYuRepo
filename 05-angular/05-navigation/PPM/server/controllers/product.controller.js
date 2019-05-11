const Product = require('../models/product.model');
const { Http } = require('@status/codes');

module.exports = {
  index: (_req, res) =>{
    Product.find()
    .then(data => { res.json(data) })
    .catch(error => res.status(Http.InternalServerError).json(error))
  },
  show: (req, res) => {
    Product.findById(req.params.id)
    .then(data => {res.json(data)})
    .catch(error => {res.status(Http.UnavailableForLegalReasons).json(error)})
  },
  create: (req, res) => {
    Product.create(req.body).then(data => {res.json(data)})
    .catch(error => {res.status(Http.UnprocessableEntity).json(error)})
  },
  edit: (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(data => {res.json(data)})
    .catch(error => {res.status(Http.UnprocessableEntity).json(error)})
  },
  destroy: (req, res) => {
    Product.findByIdAndDelete(req.params.id).then(data => {res.json(data)})
    .catch(error => {res.status(Http.ResetContent).json(error)})
  }
}
