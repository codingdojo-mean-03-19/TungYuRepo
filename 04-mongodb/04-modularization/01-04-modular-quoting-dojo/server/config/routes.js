const mongoose = require('mongoose');
const Quote = mongoose.model('quotes');

module.exports = function(app){
    
    app.get('/', function(req, res){
        res.render('index');
    });
    
    app.post('/quotes', function(req, res){
        // Quote.create(req.body, function(err){
        //     if(err){console.log(err); }
        //     res.redirect('/quotes');
        // });
    
        Quote.create(req.body)
        .then(quotes => {
            console.log(quotes);
            res.redirect('/quotes')
        })
        .catch(
            console.log
        );
    });
    
    app.get('/quotes', function(req, res){
        // Quote.find({}, function(err, quotes){
        //     if(err){console.log(err); }
        //     res.render('quotes', {quotes: quotes});
        // });
    
        Quote.find({})
        .then(quotes => 
            res.render('quotes', {quotes:quotes})
        )
        .catch(
            console.log
        );
    });
    
}