const People = require('../models/person.js');

module.exports = {
    index: function(req, res){
        People.find({})
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    
    create: function(req, res){
        People.create({
            name: req.params.name
        })
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    
    remove: function(req, res){
        People.remove({
            name: req.params.name
        })
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    
    findOne: function(req, res){
        People.findOne({
            name: req.params.name
        })
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(error => {
            console.log(error);
        })
    }
}