const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const port = process.env.PORT || 8000;
const { PORT: port = 8000 } = process.env;
const { Schema } = mongoose;
const app = express();

mongoose.connect('mongodb://localhost/quoting_dojo', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const quoteSchema = new Schema({
    name: { type: String },
    quote: { type: String },
}, { timestamps: true});

const Quote = mongoose.model('quotes', quoteSchema);


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



app.listen(port, () => console.log(`express server listening on port ${port}`));