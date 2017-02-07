(function(){
	var app = angular.module('controllers', []);
	app.controller('StoreController', function($scope, $http){
		this.products = [];
		$http.get("json/products.json").then(function(response){
			$scope.store.products = response.data;
		});
	});

	app.controller('PanelController', function(){
		this.tab = 0;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	app.controller('reviewController', function(){
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});
})();