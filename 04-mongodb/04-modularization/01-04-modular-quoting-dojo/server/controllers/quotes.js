const Quote = require('../models/quote.js');

module.exports  = {
    post_quotes: function(req, res){
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
    },

    get_quotes: function(req, res){
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
    }
}

