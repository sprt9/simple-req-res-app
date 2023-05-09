let express = require("express");
let myApp = express();

myApp.use(express.urlencoded({extended: false}));

myApp.get('/', function(req, res) {
	res.send(`
	<form action="/answer" method="POST">
		<p> What color is the sky on a clear and sunny day? </p>
		<input name="skyColor" autocomplete="off">
	</form>
	`)
});

myApp.post('/answer', (req, res) => {
	
	skyColor = req.body.skyColor.toUpperCase();

	if (skyColor == "BLUE") {
		res.send(`
		<p>Congrats, ${skyColor} is the correct answer!</p>
			<a href="/">Back to the homepage</a>
		`)
	} else { 
		res.send(`
		<p>Sorry, ${skyColor} is the incorrect.</p>
			<a href="/">Back to the homepage</a>
		`)
	}
});

myApp.get('/answer', (req, res) => {
	res.send("Are you lost? There is nothing to see here.");
});

myApp.listen(3000);