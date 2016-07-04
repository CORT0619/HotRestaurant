// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require('path');





// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

	// HTML GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------

	app.get('/tables', function(req, res){
		//res.sendFile(path.join(__dirname + '/../public/tables.html'));
		res.render('tables');
	});

	app.get('/reserve', function(req, res){
		//res.sendFile(path.join(__dirname + '/../public/reserve.html'));
		res.render('reserve');
	});

	// If no matching route is found default to home
	app.use(function(req, res){
		//res.sendFile(path.join(__dirname + '/../public/home.html'));
		res.render('home');

	});

}