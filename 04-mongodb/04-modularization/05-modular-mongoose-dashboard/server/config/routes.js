const dogs = require('../controllers/dogs.js');

//Routes

module.exports = function(app){
    //homepage
    app.get('/', function(req, res){
        dogs.index(req, res);

    });
    
    //add new animal page
    app.get('/new', function(req, res){
        res.render('new');
    });
    
    //route action of new animal form
    app.post('/', function(req, res){
        dogs.create(req, res);
    });
    
    //show information about the particular animal
    app.get('/:id', function(req, res){
        console.log('The requested ID is:', req.params.id);
        dogs.show(req, res, req.params.id);
    });
    
    //edit information of the particular animal
    app.get('/:id/edit', function(req, res){
        console.log('The requested edit ID is:', req.params.id);
        dogs.edit(req, res, req.params.id);
    });
    
    //route action of edit information of the particular animal
    app.post('/:id', function(req, res){
        console.log('The requested update ID is:', req.params.id);
        dogs.update(req, res, req.params.id);
    });
    
    //delete the particular animal
    app.post('/:id/delete', function(req, res){
        dogs.destroy(req, res, req.params.id);
    });

}


