
//Routes
const users = require('../controllers/users.js');


module.exports = function Route(app, mongoose){

    //login & register page
    app.get('/', function(req, res){
        res.render('index');
    });
    
    //route action for register form
    app.post('/add', function(req, res){
        users.register(req, res);
    });

    //route action for login form
    app.post('/login', function(req, res){
        users.login(req, res);
	})
};