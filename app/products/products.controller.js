hmapp.controller('productsController', productsController);

productsController.$inject = [ '$stateParams','$rootScope', '$scope', '$state', 'ApiService', '$window', '$timeout', '$interval'];

function productsController  ($stateParams, $rootScope, $scope, $state, ApiService, $window, $timeout, $interval) {


	/*ApiService.category().then(function(res){
        $scope.category = res.data;
    });

	$scope.product_cat= {};
	$scope.id = $stateParams.id;
    ApiService.resources().then(function(res){
        $scope.resources = res.data;
        res.data.forEach(function(v){
        	if($scope.resource_cat[v.category] === undefined) {
        		$scope.resource_cat[v.category] = [];
        	}

            $scope.resource_cat[v.category].push(v);
	        
	    });
    });*/

}
