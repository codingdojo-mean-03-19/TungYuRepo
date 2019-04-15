const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restful_task_API', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

module.exports = require('mongoose');


// const mongoose = require('mongoose');
// const path = require('path');
// const fs = require('fs');
// const reg = new RegExp('\\.js$', 'i');
// const modelsPath = path.resolve('server','models');

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/restful_task_API-api',{useMongoClient: true});
// mongoose.connection.on('connected', () => console.log('connected to MongoDB'));

// fs.readdirSync(modelsPath).forEach(model => {
//   if (reg.test(model)) {
//     require(path.join(modelsPath, model));
//   }
// });