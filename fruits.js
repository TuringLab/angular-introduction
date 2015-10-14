var fruits = [{
		_id: 0,
		name: 'Apple',
		color: 'Green'
	},{
		_id: 1,
		name: 'Pear',
		color: 'Green'
	},{
		_id: 2,
		name: 'Banana',
		color: 'Yellow'
	}];

module.exports = function(app){

	// Get a lit of fruits
	app.get('/fruits/', function(req, res) {
	  res.json(fruits);
	});

	// Create a new fruit
	app.post('/fruits/', function(req, res) {
		var fruit = req.body;
		fruit._id = fruits.length;
		fruits.push(fruit)
	  res.json(fruit);
	});

	// Get a single fruit
	app.get('/fruits/:id', function(req, res) {
		var id = req.params.id
	  res.json(fruits[id]);
	});

};