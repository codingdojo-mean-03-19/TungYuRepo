const Dog = require('../models/dog.js');
module.exports = {
    index: function(req, res){
        Dog.find({})
        .then(dogs => res.render('index', {dogs:dogs}))
        .catch(console.log);
    },

    create: function(req, res){
        Dog.create(req.body)
        .then(dog => {
            console.log(dog);
            res.redirect('/')
        })
        .catch(console.log);
    }, 

    show: function(req, res){
        Dog.find({ _id: req.params.id })
        .then(dog => {
            console.log(dog);
            res.render('show', { dog:dog[0] })
        })
        .catch(console.log);
    }, 

    edit: function(req, res){
        Dog.find({ _id: req.params.id })
        .then(dog => {
            console.log(dog);
            res.render('edit', { dog:dog[0] })
        })
        .catch(console.log);
    }, 

    update: function(req, res){
        console.log('body', req.body);
        Dog.update({ _id: req.params.id }, req.body)
        .then(dog => {
            console.log(dog);
            res.redirect('/')
        })
        .catch(console.log);
    }, 
    
    destroy: function(req, res){
        Dog.remove({ _id: req.params.id })
        .then(dog => {
            console.log(dog);
            res.redirect('/')
        })
        .catch(console.log);
    }, 
}