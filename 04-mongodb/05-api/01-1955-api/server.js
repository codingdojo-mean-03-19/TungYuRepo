const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { PORT: port = 8000 } = process.env;

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/1955_API', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

const { Schema } = mongoose;

const PeopleSchema = new Schema({
    name: String,
}, {
    timestamps: true
});

const People = mongoose.model('People', PeopleSchema);


app.get('/', function(req, res){
    People.find({})
    .then(data => {
        console.log(data);
        res.json(data);
    })
    .catch(error => {
        console.log(error);
    })
});

app.get('/new/:name', function(req, res){
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
});

app.get('/remove/:name', function(req, res){
    People.remove({
        name: req.params.name
    })
    .then(data => {
        res.json(data);
    })
    .catch(error => {
        console.log(error);
    })
});

app.get('/:name', function(req, res){
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
});

app.listen(port, () => console.log(`express server listening on port ${port}`));