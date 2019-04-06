const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const flash = require('express-flash');

const { PORT: port = 8000 } = process.env;
const { Schema } = mongoose;
const app = express();

mongoose.connect('mongodb://localhost/message_board', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
// app.use(flash());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const MessageSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name can not be blank'], 
        trim: true
    }, 
    message: {
        type: String, 
        required: [true, 'Message can not be blank'], 
        minlength: [5, 'Have to be more than 5 characters'], 
        trim: true, 
    },
    _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

const CommentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name can not be blank'], 
        trim: true
    },
    text: {
        type: String,
        trim: true
    }, 
    _message: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

const Message = mongoose.model('Message', MessageSchema);
const Comment = mongoose.model('Comment', CommentSchema);

app.get('/', function(req, res){
    Message.find({}).populate('_comments').sort( { _id:  -1} )
    .then(messages => {
        res.render('index', { messages: messages });
    })
    .catch(error => {
        console.log(error);
        res.render('index', { error: error });
    });
});

app.post('/message', function(req, res){
    const newMessage = new Message({ name: req.body.name, message: req.body.message });
    newMessage.save()
    .then(message => {
        console.log(message);
        res.redirect('/');
    })
    .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        res.render('index', { errors });
    });
});

app.post('/comment/:id', function(req, res){
    const messageId = req.params.id;
	Message.findOne({ _id: messageId }, function(err, message) {
		const newComment = new Comment({ name: req.body.name, text: req.body.text });
		newComment._message = message._id;
		Message.updateOne({ _id: message._id }, { $push: { _comments: newComment }}, function(err) {
		});
		newComment.save(function(err) {
			if (err) {
				console.log(err);
				res.render('index', { errors: newComment.errors });
			} else {
				console.log("comment added");
				res.redirect("/");
			}
		});
	});
});


app.listen(port, () => console.log(`express server listening on port ${port}`));