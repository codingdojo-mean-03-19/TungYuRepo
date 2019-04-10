const User = require('../models/user.js');
const bcrypt = require('bcryptjs');

module.exports = {
    //login & register page
    register: function(req, res){
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
    },

    login: function(req, res){
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
						res.redirect('/');
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
	}
};