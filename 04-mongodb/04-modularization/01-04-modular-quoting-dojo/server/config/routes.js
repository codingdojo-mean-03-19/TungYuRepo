const quotes = require('../controllers/quotes.js')

//Routes 

module.exports = function(app){
    
    app.get('/', function(req, res){
        res.render('index');
    });
    
    app.post('/quotes', function(req, res){
        quotes.post_quotes(req, res);
    });
    
    app.get('/quotes', function(req, res){
        quotes.get_quotes(req,res);
    });
    
}