const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { PORT: port = 8000 } = process.env;
const { Schema } = mongoose;
const app = express();

mongoose.connect('mongodb://localhost/mongoose_dashboard', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const DogSchema = new Schema({
    name: {
        type: String, 
        required: [true, 'Name can not be blank'],
        trim: true
    }, 
    age: {type: Number}, 
    weight: {type: Number}
});
const Dog = mongoose.model('Dog', DogSchema);

app.get('/', function(request, response){
    Dog.find({})
    .then(dogs => response.render('index', {dogs:dogs}))
    .catch(console.log);
});

app.get('/new', function(request, response){
    response.render('new');
});

app.post('/', function(request, response){
    Dog.create(request.body)
    .then(dog => {
        console.log(dog);
        response.redirect('/')
    })
    .catch(console.log);
});

app.get('/:id', function(request, response){
    Dog.find({ _id: request.params.id })
    .then(dog => {
        console.log(dog);
        response.render('show', { dog:dog[0] })
    })
    .catch(console.log);
});


app.get('/:id/edit', function(request, response){
    Dog.find({ _id: request.params.id })
    .then(dog => {
        console.log(dog);
        response.render('edit', { dog:dog[0] })
    })
    .catch(console.log);
});

app.post('/:id', function(request, response){
    console.log('body', request.body);
    Dog.update({ _id: request.params.id }, request.body)
    .then(dog => {
        console.log(dog);
        response.redirect('/')
    })
    .catch(console.log);
});

app.post('/:id/delete', function(request, response){
    Dog.remove({ _id: request.params.id })
    .then(dog => {
        console.log(dog);
        response.redirect('/')
    })
    .catch(console.log);
});


app.listen(port, () => console.log(`express server listening on port ${port}`));