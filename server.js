// TODO: import express and initialize the app

app.use(express.static(__dirname + '/public'));


app.listen(port, function () {
	console.log('Listening on port', port);
});