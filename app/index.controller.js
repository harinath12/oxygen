hmapp.controller('indexController', indexController);

indexController.$inject = ['$rootScope', '$scope', '$state', 'ApiService', '$window', '$timeout', '$interval'];

function indexController($rootScope, $scope, $state, ApiService, $window, $timeout, $interval) {
    var vm = this;

    $scope.user = localStorage.getItem('oxygen');

    if(!!$scope.user){
        $rootScope.loggedInUserInfo = JSON.parse($scope.user);
    }

    $rootScope.menu = {};
    $rootScope.stateparams ={};
    $rootScope.currentState = $state.current.name;
    $rootScope.currentStateDetails = $state.current;

    $rootScope.CategoryAndProducts = {};
    ApiService.getCategoryAndProducts().then(function(res){
        $rootScope.CategoryAndProducts = res.data;
    });

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){ 
        $rootScope.currentState = toState.name;
        $rootScope.currentStateDetails = toState;
        $rootScope.stateparams = toParams;
        

           
            $('.navbar-light .dmenu').hover(function () {
                    $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
                }, function () {
                    $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
                });
            
             
                
                /*$(".megamenu").on("click", function(e) {
                    e.stopPropagation();
                });
           

        if($('#navbarSupportedContent').hasClass('show')){
            $('.navbar-toggler').trigger('click');
        }
        $('.tooltip').removeClass('show');
        $("html, body").animate({ scrollTop: 0 }, "slow");*/
    });
    
    $rootScope.$on('$stateChangeStart',
    function (event, toState, toParams, fromState, fromParams, options) { 
        
        if(toState.auth && !$rootScope.loggedInUserInfo){
            event.preventDefault();
            $state.go('login');
        }
    });
    


    
    $scope.copy = function(data){
        return angular.copy(data);
    };
    
    $scope.loadPlugin = function(){
       $timeout(function(){
       	$.Pages.initSidebar();
       }, 100);
    };
    
    $scope.initTooltip = function(){
        $('[data-toggle="tooltip"]').tooltip();
    };
    
    $scope.focus = function(id){
        $timeout(function(){
            $('#'+id).focus();
        }, 200);
    };

    $scope.logout = function(){
        localStorage.removeItem('anandadmin');
        $rootScope.loggedInUserInfo = {};
        $state.go('login');
    }
    var chars =  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = 30; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    $scope.transactionid = result;
    $scope.gotonewaccount =function(){
        
        
        document.forms['frm1'].submit();
    }
    $(document).ready(function() {
        $(".megamenu").on("click", function(e) {
            e.stopPropagation();
        });
    });

}