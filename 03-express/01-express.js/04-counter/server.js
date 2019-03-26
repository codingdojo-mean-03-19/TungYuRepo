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
// app.use(session({
//     secret: 'keyboardkitteh',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 60000 }
// }));


app.get('/', function(request, response){
    if(!request.session.count){
        request.session.count = 1;
    } else{
        request.session.count++;
    }
    response.render('index', {count: request.session.count});
});

app.post('/add2', function(request, response){
    if(!request.session.count){
        request.session.count = 1;
    } else{
        request.session.count++;
    }
    response.redirect('/');
});

app.post('/reset', function(request, response){
    request.session.destroy();
    response.redirect('/');
});


app.listen(port, () => console.log(`Express server listening on port ${port}`));