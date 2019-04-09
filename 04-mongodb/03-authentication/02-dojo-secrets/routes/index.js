module.exports = function Route(app, mongoose){
    const bcrypt = require('bcryptjs');

    const { Schema } = mongoose;

    const UserSchema = new Schema({
        email: {
            type: String, 
            required: [true, 'Email can not be blank!'], 
            trim: true
        },
        first_name: {
            type: String, 
            required: [true, 'First name can not be blank!'], 
            trim: true
        },
        last_name: {
            type: String, 
            required: [true, 'Last name can not be blank!'], 
            trim: true
        },
        password: {
            type: String, 
            required: [true, 'Please create password!'], 
            trim: true
        },
        birthday: {
            type: Date, 
            required: [true, 'Birthday can not be blank!'], 
            trim: true
        },
        _user_secret: [{ type: Schema.Types.ObjectId, ref: 'Secret' }]
    });

    const SecretSchema = new Schema({
        text: {
            type: String, 
            require: [true, 'Secret field can not be blank.'], 
            minlength: [5, 'Have to be more than 5 character.'],
            trim: true
        }, 
        _comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }], 
        _users: [{ type: Schema.Types.ObjectId, ref: 'User' }]
    });

    const CommentSchema = new Schema({
        comment: {
            type: String, 
            require: [true, 'Secret field can not be blank.'], 
            minlength: [1, 'Have to be more than 1 character.'],
            trim: true
        }, 
        _secret: [{ type: Schema.Types.ObjectId, ref: 'Secret' }]
    });


    const User = mongoose.model('User', UserSchema);
    const Secret = mongoose.model('Secret', SecretSchema);
    const Comment = mongoose.model('Comment', CommentSchema);
    
    //login & register page
    app.get('/', function(req, res){
        res.render('index');
    });
    
    //route action for register form
    app.post('/add', function(req, res){
        const current_password = req.body.password;
        const confirm_password = req.body.c_password;
        User.findOne({ email: req.body.email }, function(err, user){
            if(user){
                req.flash('PasswordNoMatch', 'Email already exist.');
                res.redirect('/');
            } else {
                console.log('user not found');
                if(current_password == confirm_password){
                    const hashedPassword = bcrypt.hashSync(current_password, 10);
                    User.create({
                        email: req.body.email, 
                        first_name: req.body.first_name, 
                        last_name: req.body.last_name,
                        password: hashedPassword, 
                        birthday: req.body.birthday
                    })
                    .then(new_user =>{
                        console.log(new_user);
                        req.flash('success', 'Congrats! you have successfully registered.');
                        res.redirect('/');
                    })
                    .catch(error =>{
                        console.log(error);
                        for(let err in error.errors){
                            req.flash('errors', error.errors[err].message);
                        }
                        res.redirect('/');
                    })
                } else {
                    req.flash('PasswordNoMatch', 'Password did not match');
                    res.redirect('/');
                }
            } 
            if(err){
                console.log(err);
            }
        });
    });

    //route action for login form
    app.post('/login', function(req, res){
		console.log(" req.body: ", req.body);
		const user_email = req.body.login_email;
		const user_password = req.body.login_password;
		if(user_email == ''|| user_password == '')
		{
			req.flash('PasswordNoMatch', 'All fields cannot be empty.');
			res.redirect('/');
		}else{
			User.findOne({email:req.body.login_email}, (err, user) => {
			if (user) {
				bcrypt.compare(user_password, user.password)
				.then( result => {
					if(result)
					{
						console.log(user);
						console.log(result);
						console.log(user_password);
						req.session.user_id = user._id;
						req.flash('success', 'Successfully logged in.');
						res.redirect('/secret');
					}else{
						req.flash('PasswordNoMatch', 'Password is wrong.');
						res.render('index');
					}
				})
				.catch( error => {
					console.log(error);
					for(let err in error.errors){
						req.flash('errors', error.errors[err].message);
					}
					res.render('index');	
				})
			}else{
				req.flash('PasswordNoMatch', 'Email address does not exist.');
				res.redirect('/');
			}
			});
		}
    })
    
        
    //secret page
    app.get('/secret', function(req, res){
        const user = req.session.user_id;
        Secret.find({}, function(err, results){
            if(err){
                console.log(err);
            }
            res.render('secrets', { results:results, user:user})
        });
    });

    //route action for secret form
    app.post('/secret', function(req, res){
        const v = req.body.my_secret;
        if(v){
            const userId = req.session.user_id;
            User.findOne({_id: userId}, (err, data) =>{
                if(data){
                    console.log(userId);
                    console.log(data);
                    Secret.create({
                        text: req.body.my_secret,
                        _users: data
                    }).then(result =>{
                        console.log(result);
                        res.redirect('/secret');
                    }).catch(error =>{
                        console.log(error);
                        res.render('secrets');
                    })
                }else{
                    res.redirect('/secret');
                }
                if(err){
                    console.log(err);
                    res.redirect('/secret');
                }
            });
        } else {
            req.flash('PasswordNoMatch', 'Secret field cannot be blank.');
            res.redirect('/secret');
        }
	})

    app.get('/details/:id', function(req, res){
		const secret_id = req.params.id;
		Secret.findOne({ _id: secret_id })
		.then(message =>{
			Comment.find({ _secret: message }, (err, data) =>{
				if(data){
					console.log('data found ', data);
					res.render('details', { msg: message, data:data });
				}else{
					res.redirect('/details/'+secret_id);
				}
			})
		})
		.catch(error =>{
			console.log(error);
			for(let err in error.errors){
				req.flash('errors', error.errors[err].message);
			}
			res.redirect('/details/'+secret_id);
		})
	})

	app.post('/comment/:id', function(req, res){
		const messageID = req.params.id;
		Secret.findOne({ _id: req.params.id })
		.then(c => {
			Comment.create({
				comment: req.body.comment,
				_secret: c
			})
			req.flash('success', 'Your comment successfully added.')
			res.redirect('/details/'+messageID);
		})
		.catch(error => {
			console.log(error);
			for(let err in error.errors){
				req.flash('errors', error.errors[err].message);
			}
			res.redirect('/details/'+messageID);
		})
	})

	//Delete
	app.get('/destroy/:id', function(req, res){
		Secret.remove({_id: req.params.id}, function(err){
			req.flash('success', 'Record revomed successfully.')
			res.redirect('/secret');
		})
    })
    
    //logout
    app.get('/clear', function(req, res){
        req.session.destroy();
        res.redirect('/');
    });
};