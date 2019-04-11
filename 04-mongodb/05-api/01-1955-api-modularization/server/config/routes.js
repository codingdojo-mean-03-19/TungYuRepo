//Routes

const people = require('../controllers/people.js');

module.exports = function(app){

    app.get('/', function(req, res){
        people.index(req, res);
        // People.find({})
        // .then(data => {
        //     console.log(data);
        //     res.json(data);
        // })
        // .catch(error => {
        //     console.log(error);
        // })
    });
    
    app.get('/new/:name', function(req, res){
        people.create(req, res);
        // People.create({
        //     name: req.params.name
        // })
        // .then(data => {
        //     console.log(data);
        //     res.json(data);
        // })
        // .catch(error => {
        //     console.log(error);
        // })
    });
    
    app.get('/remove/:name', function(req, res){
        people.remove(req, res);
        // People.remove({
        //     name: req.params.name
        // })
        // .then(data => {
        //     res.json(data);
        // })
        // .catch(error => {
        //     console.log(error);
        // })
    });
    
    app.get('/:name', function(req, res){
        people.findOne(req, res);

        // People.findOne({
        //     name: req.params.name
        // })
        // .then(data => {
        //     console.log(data);
        //     res.json(data);
        // })
        // .catch(error => {
        //     console.log(error);
        // })
    });
}
