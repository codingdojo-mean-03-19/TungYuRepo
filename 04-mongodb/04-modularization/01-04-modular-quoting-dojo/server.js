const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const port = process.env.PORT || 8000;
const { PORT: port = 8000 } = process.env;
const { Schema } = mongoose;
const app = express();

mongoose.connect('mongodb://localhost/quoting_dojo_modularizing_routes', { useNewUrlParser: true });
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


require('./server/config/routes.js')(app);



app.listen(port, () => console.log(`express server listening on port ${port}`));