const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const session = require('express-session');
const axios = require('axios');

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
app.use(bodyParser.json());

const getPeopleData = 'https://swapi.co/api/people';
const getPlanetData = 'https://swapi.co/api/planets';

app.get('/', function(req, res){
    
    res.render('index');
});
app.get('/people/:arg', function(request, res){
    // use the axios .get() method - provide a url and chain the .then() and .catch() methods
    let apiCall;
    if (request.params.arg == 'next'){
        apiCall = axios.get(request.session.next);
    } else if (request.params.arg == 'prev'){
        apiCall = axios.get(request.session.previous);
    } else {
        apiCall = axios.get(getPeopleData);
        console.log('default apiCall returns: ', apiCall);
    }
    apiCall.then(data=> {
        // log the data before moving on! 
//         console.log("got the data: ", data.data);
        request.session.category = '/people';
        request.session.next = data.data.next;
        request.session.previous = data.data.previous;
        // response.send(data.data);
        // rather than rendering, just send back the json data!
        res.json(data.data);
    })
    .catch(error => {
        // log the error before moving on!
        console.log('The following errors were generated: ', error);
        res.json(error);
    })
});

app.get('/planet/:arg', function(request, res){
    // use the axios .get() method - provide a url and chain the .then() and .catch() methods
    let apiCall;
    if (request.params.arg == 'next'){
        apiCall = axios.get(request.session.next);
    } else if (request.params.arg == 'prev'){
        apiCall = axios.get(request.session.previous);
    } else {
        apiCall = axios.get(getPlanetData);
        console.log('default apiCall returns: ', apiCall);
    }
    apiCall.then(data => {
        // log the data before moving on! 
        console.log("got the tatattatat: ", data.data);
        request.session.category = '/planet';
        request.session.next = data.data.next;
        request.session.previous = data.data.previous;
        // response.send(data.data);
        // rather than rendering, just send back the json data!
        res.json(data.data);
    })
    .catch(error => {
        // log the error before moving on!
        console.log('The following errors were generated: ', error);
        res.json(error);
    })
});

app.get('/next', function(request, res){
    res.redirect(request.session.category + '/next');
});

app.get('/all', function(request, res){
    res.redirect(request.session.category );
});

app.get('/prev', function(request, res){
    res.redirect(request.session.category + '/prev');
});

    

app.listen(port, () => console.log(`Express server listening on port ${port}`));
