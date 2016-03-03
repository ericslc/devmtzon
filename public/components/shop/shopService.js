/* global angular */
var app = angular.module('ecommerce');

app.service('shopService', function ($http, $q) {


	this.getProductsPreview = function () {
		var dfd = $q.defer();

		$http.get('/api/getProductList')
			.then(function (products) {
				console.log(products);
				dfd.resolve(products.data);
			})
			.catch(function (error) {
				console.log(error);
				dfd.reject(error);
			});

		return dfd.promise;
	};

});