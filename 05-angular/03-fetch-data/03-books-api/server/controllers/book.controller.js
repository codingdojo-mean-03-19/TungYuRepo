const Book = require('mongoose').model('Book');
const { Http } = require('@status/codes');


module.exports = {
  //retrieve all data
  index(_req, res){
    Book.find({})
    .then(result => res.json(result))
    .catch(error => res.status(Http.InternalServerError).json(error))
  },
  //create new data
  create(req, res){
    Book.create(req.body)
    .then(result => res.json(book))
    .catch(error => {
      const errors = Object.keys(error.errors).map(key => error.errors[key].message);
      res.status(Http.UnprocessableEntity).json(errors);
    })
  },
  //show data
  show(req, res){
    const { book_id: bookId } = req.params;
    Book.findById(bookId)
    .then(result => res.json(result))
    .catch(error => status(Http.UnavailableForLegalReasons).json(error));
  },
  //update data
  update(req, res){
    const { book_id: bookId } = req.params;
    Book.findByIdAndUpdate(bookId, req.body, { new: true })
    .then(result => res.json(result))
    .catch(error => status(Http.UnprocessableEntity).json(error));
  },
  //delete data
  destroy(_req, res){
    Book.findByIdAndDelete(bookId)
    .then(result => res.json(result))
    .catch(error => res.status(Http.ResetContent).json(error));
  },
}
