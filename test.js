let express = require("express");

let myApp = express();

myApp.get('/', function(req, res) {
	res.send(`
	<form action="/answer" method="POST">
		<p> What color is the sky on a clear and sunny day? </p>
		<input name="skyColor" autocomplete="off">
	</form>
	`)
});

myApp.post('/answer', (req, res) => {
	res.send("Thank you for submitting the form.");
});

myApp.get('/answer', (req, res) => {
	res.send("Are you lost? There is nothing to see here.");
});

myApp.listen(3000);