hmapp.controller('productsController', productsController);

productsController.$inject = [ '$stateParams','$rootScope', '$scope', '$state', 'ApiService', '$window', '$timeout', '$interval'];

function productsController  ($stateParams, $rootScope, $scope, $state, ApiService, $window, $timeout, $interval) {

    $scope.pageInfo = {filter: {category: '', brand: ''}, orderby: 'title'};
    $scope.products = [];
    
	ApiService.getAllProducts().then(function(res){
        $scope.products = res.data;
    });


	if ($stateParams.id) {
        $scope.pageInfo.filter.category = $stateParams.id;

        var filter = $rootScope.CategoryAndProducts.filter(a => a.id == $stateParams.id);

        if (filter.length) {
            $scope.pageInfo.category = filter[0];
        }
    }

    if ($stateParams.id2) {
        $scope.pageInfo.filter.brand = $stateParams.id2;
    }
}
