const express = require('express');

const methodOverride = require('method-override');

const pg = require('pg');

// Added in for cookies and user/ pw authentication
const sha256 = require('js-sha256');

const SALT = 'This is a string';

const cookieParser = require('cookie-parser');

// Initialise postgres client
const config = {

  user: 'weslie',
  host: '127.0.0.1',
  database: 'claimsdb',
  port: 5432

};

if (config.user === 'ck') {

  throw new Error("====== UPDATE YOUR DATABASE CONFIGURATION =======");

};

const pool = new pg.Pool(config);

pool.on('error', function (err) {

  console.log('Idle client error', err.message, err.stack);

});

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

app.use(cookieParser());

//app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();

app.set('views', __dirname + '/views');

app.set('view engine', 'jsx');

app.engine('jsx', reactEngine);

/**/

const getRoot = (request, response) => {
	//response.send('EASY Claim Submission Online!');
	response.render('users/home');
	//response.redirect('/');
}

const userRegister = (request, response) => {

	const queryStringUserCheck = 'SELECT * FROM users WHERE user_name = ($1)';

    const valuesUserCheck = [request.body.user_name];

    pool.query(queryStringUserCheck, valuesUserCheck, (errUserCheck, queryResultUserCheck) => {

     // 	if (errUserCheck) {

     //  		console.error('error:', errUserCheck);

     //  		response.sendStatus(500);

    	// } 	else
    	//console.log(queryResultUserCheck.rows);
    	//console.log(queryResultUserCheck.rows[0]);
    	//console.log(request.body.user_name);  

    		if (queryResultUserCheck.rows[0] !== undefined) {

    		response.render('users/home2');

    		}   else if (queryResultUserCheck.rows[0] === undefined) {   			

					const queryString = 'INSERT INTO users (user_name, password, nric, nationality, phone_contact, email_contact) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';

  					let hashedPassword = sha256(request.body.password);

					const values = [request.body.user_name, hashedPassword, request.body.nric, request.body.nationality, request.body.phone_contact, request.body.email_contact];

					console.log("Request.body:", request.body);

					pool.query(queryString, values, (err, queryResult) => {

    				if (err) {

    					console.error('error getting user register:', err);

    					response.sendStatus(500);

    				} 

    					if (queryResult.rowCount >= 1) {

   							console.log('User created successfully');

   							let currentSessionCookie = sha256(queryResult.rows[0].user_name + 'logged_id' + SALT);

   							response.cookie('logged_in', currentSessionCookie);

        					response.cookie('user_name', queryResult.rows[0].user_name);

        					response.cookie('user_id', queryResult.rows[0].id);

        					response.cookie('status', 'user_logged');

    					}   else {

      						console.log('User could not be created');

    						}

    						//response.redirect('/users/claims');
    						response.redirect('/users/profile');

  					});

				}

	});

};

const userLogInForm = (request, response) => {
	// if this exists request.query.login 
	//response.render('users/login', {login: 'unsuccessful'});
	// if not 
	//request.cookie('status', 'user_logged');

	response.render('users/login')
 
}

const userLogInForm2 = (request, response) => {

	//request.cookie('status', 'user_logged');

	response.render('users/login2');

}

const userLogIn = (request, response) => {

	const queryString = 'SELECT * FROM users WHERE user_name = ($1)';

	const values = [request.body.user_name];

	pool.query(queryString, values, (err, queryResult) => {

		//console.log(request.body.user_name, sha256(request.body.password));

  		//console.log(queryResult);

    	if (err) {

    	console.error('error getting user login:', err);

    	response.sendStatus(500);

    	} 	else if (sha256(request.body.password) === queryResult.rows[0].password) {

	        	console.log('User login successfully');

	   			let currentSessionCookie = sha256(queryResult.rows[0].user_name + 'logged_id' + SALT);

	   			response.cookie('logged_in', currentSessionCookie);

	        	response.cookie('user_name', queryResult.rows[0].user_name);

	        	response.cookie('user_id', queryResult.rows[0].id);

	        	response.cookie('status', 'user_logged');
	        	
	        	response.redirect('/users/profile');

	     	} 	else { 

	      		console.log('Incorrect user name or password. Please try again.');  
	      		//response.send('Incorrect user name or password. Please try again.');
	        	//response.redirect('/users/login?login=fail');
	        	response.redirect('/users/login2');

	     	  	}

  });

}

const getClaimForm = (request, response) => {

	if (request.cookies['status'] === "user_logged"){

		response.render('claims/claim');

	} 	else {

			response.render('users/home');

		}

}

const getClaimForm2 = (request, response) => {

	//request.cookie('status', 'user_logged');
	if (request.cookies['status'] === "user_logged"){

		response.render('claims/claim2');

	} 	else {

			response.render('users/home');

		}

}

const getClaimSuccess = (request, response) => {

	//request.cookie('status', 'user_logged');
	if (request.cookies['status'] === "user_logged") {

		response.render('claims/claimsuccess');

	} 	else {

			response.render('users/home');

		}

}

const ClaimDbAuthentication = (request, response) => {

	const queryStringCheck = 'SELECT * FROM claims WHERE category = ($1) AND user_name = ($2)';

	//const valuesCheck = [request.body.category, request.body.user_name];

	const valuesCheck = [request.body.category, request.cookies.user_name];

	pool.query(queryStringCheck, valuesCheck, (errCheck, queryResultCheck) => {

     // 	if (errCheck) {

     //  		console.error('error:', errCheck);

     //  		response.sendStatus(500);

    	// } 	else 

    		if (queryResultCheck.rows[0] !== undefined) {

				response.render('claims/claim3');

			} 	else if (queryResultCheck.rows[0] === undefined) {

    				const queryStringPolicy = 'SELECT * FROM policies WHERE user_name = ($1) AND type = ($2)';

    				//const valuesPolicy = [request.body.user_name, request.body.category];

    				const valuesPolicy = [request.cookies.user_name, request.body.category];

    				pool.query(queryStringPolicy, valuesPolicy, (errPolicy, queryResultPolicy) => {

		    		if (errPolicy) {

		      			console.error('error:', errPolicy);

		      			response.sendStatus(500);

		      		}	else if (queryResultPolicy.rows[0] !== undefined) {

		      				if (request.body.amount <= queryResultPolicy.rows[0].amount) {

		    				const queryStringInsert = 'INSERT INTO claims (category, amount, user_name) VALUES ($1, $2, $3) RETURNING *';
    				
    						//const valuesInsert = [request.body.category, request.body.amount, request.body.user_name];

    						const valuesInsert = [request.body.category, request.body.amount, request.cookies.user_name];
    				
    							pool.query(queryStringInsert, valuesInsert, (errInsert, queryResultInsert) => {

     								if (errInsert) {

      									console.error('error:', errInsert);

      									response.sendStatus(500);

      								}	else {

      									response.redirect('/users/claimsuccess');

      									}

      							});

      						};

      							if (request.body.amount > queryResultPolicy.rows[0].amount) {      							

  									response.redirect('/users/claims2');

								} 
      				
		    				}

		    				if (queryResultPolicy.rows[0] === undefined) {

		    					response.render('claims/claim4');

		    				}

						})

				}

	})

}

const getClaimUpdateForm = (request, response) => {

	const queryStringEdit = 'SELECT users.id, users.user_name, claims.category, claims.amount FROM users INNER JOIN claims ON users.user_name = claims.user_name WHERE users.id = ($1)';
  
  	const id = request.params.id;
  
  	const valuesEdit = [id];

  	pool.query(queryStringEdit, valuesEdit, (errEdit, queryResultEdit) => {

  		if (errEdit) {

      		console.error('error:', errEdit);

      		response.sendStatus(500);

     	}	else {
     			
				if (request.cookies['status'] === "user_logged"){

				response.render('claims/claimedit', {claims: queryResultEdit.rows});

				} 	else {

						response.render('users/home');

					}					
  			}

	});

};

const getClaimUpdate = (request, response) => {

    //const user_name = "'" + request.body.user_name + "'";

    const user_name = "'" + request.cookies.user_name + "'";

    const queryStringPolicy = 'SELECT * FROM policies WHERE user_name = ($1) AND type = ($2)';

    const valuesPolicy = [request.cookies.user_name, request.body.category];

    pool.query(queryStringPolicy, valuesPolicy, (errPolicy, queryResultPolicy) => {

		if (errPolicy) {

		    console.error('error:', errPolicy);

		    response.sendStatus(500);

		} 	else if (queryResultPolicy.rows[0] !== undefined) {

				if (request.body.amount <= queryResultPolicy.rows[0].amount) {

					const queryStringUpdate = 'UPDATE claims SET category = ($1), amount = ($2) WHERE claims.user_name =' + user_name; 
	    
	    			const valuesUpdate = [request.body.category, request.body.amount];

	    			pool.query(queryStringUpdate, valuesUpdate, (errUpdate, queryResultUpdate) => {

	        		if (errUpdate) {

	      				console.error('error:', errUpdate);

	      				response.sendStatus(500);

	     			} 	else {
	     		      	
	          				response.redirect('/users/claimsuccess');

	       	  			}

	    			});

				};

				if (request.body.amount > queryResultPolicy.rows[0].amount) {      							

  					response.render('claims/claimedit1', {claims: queryResultPolicy.rows});

				}

			}

			if (queryResultPolicy.rows[0] === undefined) {

		    	response.render('claims/claimedit2');

		    } 

	})

}

const getClaimDeleteSuccess = (request, response) => {

	//request.cookie('status', 'user_logged');
	if (request.cookies['status'] === "user_logged") {

		response.render('claims/claimdeletesuccess');

	} 	else {

			response.render('users/home');

		}

}

const getClaimDeleteForm = (request, response) => {

	const queryStringDelete = 'SELECT users.id, users.user_name, claims.category, claims.amount FROM users INNER JOIN claims ON users.user_name = claims.user_name WHERE users.id = ($1)';
  
  	const id = request.params.id;
  
  	const valuesDelete = [id];

  	pool.query(queryStringDelete, valuesDelete, (errDelete, queryResultDelete) => {

  		if (errDelete) {

      		console.error('error:', errDelete);

      		response.sendStatus(500);

     	}	else {
     			
				if (request.cookies['status'] === "user_logged"){

				response.render('claims/claimdelete', {claims: queryResultDelete.rows});

				} 	else {

						response.render('users/home');

					}					
  			}

	});

};

const getClaimDelete = (request, response) => {

    //const user_name = "'" + request.body.user_name + "'";

    const user_name = "'" + request.cookies.user_name + "'";

    const queryStringPolicy = 'SELECT * FROM policies WHERE user_name = ($1) AND type = ($2)';

    const valuesPolicy = [request.cookies.user_name, request.body.category];

    	pool.query(queryStringPolicy, valuesPolicy, (errPolicy, queryResultPolicy) => {   		

		if (errPolicy) {

		    console.error('error:', errPolicy);

		    response.sendStatus(500);

		} 	else if (queryResultPolicy.rows[0] !== undefined) {

					const queryStringRemove = 'DELETE FROM claims WHERE claims.user_name = ($1) AND claims.category = ($2)'; 
	    
	    			const valuesRemove = [request.cookies.user_name, request.body.category];

	    			pool.query(queryStringRemove, valuesRemove, (errRemove, queryResultRemove) => {

	        			if (errRemove) {

	      					console.error('error:', errRemove);

	      					response.sendStatus(500);

	     				} 	else {
	     		      	
	          					response.redirect('/users/claimdeletesuccess');
	          					//response.redirect('/users/claimdeletesuccess');

	       	  				}

	    			});

			}

			//console.log(queryResultPolicy);
			//console.log(queryResultPolicy.rows);

			if (queryResultPolicy.rows[0] === undefined) {

		    	//response.render('claims/claimedit2');
		    	response.render('claims/claimdeletenotsuccess');

		    } 
			
		})

}

const getProfilePage = (request, response) => {

	//console.log("Request Cookies:", request.cookies);

	if (request.cookies['status'] === "user_logged"){

		response.render('users/profile', {cookies: request.cookies});

	} else {

		response.render('users/home');

	}

}

const UserLogOut = (request, response) => {

  	response.clearCookie('user_name');

  	response.clearCookie('logged_in');

  	response.clearCookie('status');

  	response.redirect('/');

}

/**
 * ===================================
 * Routes
 * ===================================
 */

app.get('/:id/edit', getClaimUpdateForm);
app.put('/:id', getClaimUpdate);

app.get('/:id/delete', getClaimDeleteForm);
app.delete('/:id', getClaimDelete);
app.get('/users/claimdeletesuccess',getClaimDeleteSuccess);



app.get('/', getRoot);


app.post('/users', userRegister);


app.get('/users/claims', getClaimForm);
app.get('/users/claims2', getClaimForm2);
app.get('/users/claimsuccess', getClaimSuccess);
app.post('/users/claims', ClaimDbAuthentication);



app.get('/users/login', userLogInForm);
app.get('/users/login2', userLogInForm2);
app.post('/users/loggedin', userLogIn);


app.get('/logout', UserLogOut);


app.get('/users/profile', getProfilePage);


const server = app.listen(3000, () => console.log('~~~ Ahoy we go from the port of 3000!!!'));


