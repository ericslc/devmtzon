// TODO: import express and initialize the app

app.use(express.static(__dirname + '/public'));
var express = require('express'),
		bodyParser = require('body-parser'),
    app = express(),
    port = 8005;

		app.use(express.static(__dirname + '/public'));
		app.use(bodyParser.urlencoded({extended: true}));
		app.use(bodyParser.json());

		app.get('/api/getProduct/:id', function(req, res) {
    var product = _.findIndex(products, {_id: req.params.id});
    var item = products.slice(product, product + 1);
    res.json(item)

});
app.post('/api/getProductList', function(req, res) {
    var product = req.body;
    products.push(product);
    res.send(product);
});


app.listen(8005, function () {
	console.log('Listening on port', 8005);
});
