hmapp.controller('galleryController', galleryController);

galleryController.$inject = ['$stateParams', '$rootScope', '$scope', '$state', 'ApiService', '$window', '$timeout', '$interval'];

function galleryController  ($stateParams, $rootScope, $scope, $state, ApiService, $window, $timeout, $interval) {

	$timeout(function(){
		  $('.fancybox').fancybox();
          /*$('select').niceSelect();*/
	}, 500);

	ApiService.category().then(function(res){
        $scope.category = res.data;
    });

	$scope.gallery_cat= {};
	$scope.id = $stateParams.id;
    ApiService.gallery().then(function(res){
        $scope.gallery = res.data;
        res.data.forEach(function(v){
        	if($scope.gallery_cat[v.category] === undefined) {
        		$scope.gallery_cat[v.category] = [];
        	}
            v.image.split(',').forEach(vv => {
                $scope.gallery_cat[v.category].push(vv);
            });
	        
	    });
    });
}