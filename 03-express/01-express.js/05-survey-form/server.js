const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const session = require('express-session');

const sessionConfig = {
    secret: 'abc',
    resave: false,
    saveUninitialized: true,
    name: 'session'
};

const port = process.env.PORT || 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.resolve('static')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session(sessionConfig));

// Another way:
// // we're going to have /routes/index.js handle all of our routing
// require('./routes/index.js')(app);


app.get('/', function(request, response){
    response.render('index');
});

app.post('/result', function(request, response){
    const context = {
        name: request.body.your_name, 
        locations: request.body.locations,
        languages: request.body.languages, 
        comment: request.body.comment
    }
    response.render('results',  {data: context});
});




app.listen(port, () => console.log(`Express server listening on port ${port}`));