// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require('path');

var tableArray = require('../data/table-data.js');



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

	// HTML GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------

	app.get('/tables', function(req, res){
		res.render('tables', {tables: tableArray});
	});

	app.get('/reserve', function(req, res){
		res.render('reserve');
	});

	// If no matching route is found default to home
	app.use(function(req, res){
		res.render('home');

	});

}