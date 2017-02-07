(function(){
	var app = angular.module('directives', []);
	  app.directive("productReviews", function() {
		    return {
		      restrict: 'A',
		      templateUrl: 'templates/product-reviews.html'
		    };
		  });
	  app.directive("nav-pills", function() {
		    return {
		      restrict: 'E',
		      templateUrl: 'templates/nav-pills.html'
		    };
		  });
})();