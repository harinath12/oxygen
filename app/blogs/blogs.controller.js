hmapp.controller('blogsController', blogsController);

blogsController.$inject = ['$stateParams', 'DATA', '$rootScope', '$scope', '$state', 'ApiService', '$window', '$timeout', '$interval'];

function blogsController  ($stateParams, DATA, $rootScope, $scope, $state, ApiService, $window, $timeout, $interval) {
	$scope.blogs = DATA.data;
	
	if($stateParams.id){
		$scope.blogs = $scope.blogs.filter(function(a){
			return a.id == $stateParams.id;
		});
	}

}