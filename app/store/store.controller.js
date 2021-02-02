hmapp.controller('storeController', storeController);

storeController.$inject = [ '$stateParams','$rootScope', '$scope', '$state', 'ApiService', '$window', '$timeout', '$interval'];

function storeController  ($stateParams, $rootScope, $scope, $state, ApiService, $window, $timeout, $interval) {

	ApiService.stores().then(function(res){
        $scope.stores = res.data;
    });
}
