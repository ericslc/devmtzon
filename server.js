// TODO: import express and initialize the app


var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 8005;


app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/api/getProductList', function(req, res) {
		 res.send(products)

		});

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
app.put('/api/getProduct/:id', function(req, res){
	var update = req.body;
	productIndex = _.findIndex(products,{_id: req.params.id});

	console.log(update);
	console.log(productIndex);

	if (!products[productIndex]) {
		res.send('not found');
	} else {
		var updatedProduct = _.assign(productIndex[productIndex], update);
		res.json(updatedProduct);
	}
});
app.delete('/api/getProduct/:id', function(req, res) {
	var productIndex = _.findIndex(products, {_id: req.params.id});
	if (!products[productIndex]) {
		res.send('not found');
	} else {
		var deletedProduct = products[productIndex];
}
});

/*testing github*/
app.listen(port, function () {
	console.log('Listening on port', port);
});
