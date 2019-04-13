const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const server = app.listen(port, () => console.log(`listening on port ${port}`));


app.get('/', function(req, res){
    res.render('index');
});

app.post('/users', function(req, res){
    console.log("POST DATA", req.body);
    // create a new User with the name and age corresponding to those from req.body
    var user = new User({name: req.body.name, age: req.body.age});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    user.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
        console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a user!');
        }
        res.redirect('/');
    });
});

app.get('/', function(req, res){
    User.find({}, function(err, users){
        const e_user = User({})
    });
});

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
// our db in mongodb -- this should match the name of the db you are going to use for your project
mongoose.connect('mongodb://localhost/basic_mongoose', { useNewUrlParser: true });
const UserSchema = new mongoose.Schema({
    name: String, 
    age : Number
});
mongoose.model('User', UserSchema);// We are setting this Schema in our Models as 'User'
const User = mongoose.model('User');// We are retrieving this Schema from our Models, named 'User'

mongoose.Promise = global.Promise;




// app.listen(8000, function() {
//     console.log("listening on port 8000");
// });