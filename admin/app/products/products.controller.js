angular.module('app')

        .controller('productsController', productsController);



productsController.$inject = ['$scope', '$state', '$rootScope', 'APIURL', '$http', 'ApiService']



function productsController($scope, $state, $rootScope, APIURL, $http, ApiService) {

    $scope.pagingSize = 5;

    $scope.dataPerPage = 10;

    $scope.totalItems = [];

    $scope.displayItems = [];



    $scope.pageInfo = {submitted: false};

    $scope.form_data = {};

    $scope.totalItems = [];


    $scope.category = {};
    ApiService.hm_category().then(function(res){
            res.data.forEach(function(v){
                $scope.category[v.id] = v;
            });
        });
    
    $scope.deleteimage = function(ind){
        var imgs = $scope.form_data.file.split(',');
        imgs.splice(ind, 1);

        $scope.form_data.file = imgs.join(',');
    };

    if($state.current.name == 'products') {
        ApiService.hm_products().then(function(res){
            $scope.totalItems = res.data;
        });
    } else if($state.current.name == 'edit_product') {
        ApiService.hm_get_products($state.params.id).then(function(res){
            $scope.form_data = res.data;
        });
    } 

    

    $scope.save = function(frm){

        $scope.pageInfo.submitted = true;
        frm.$setDirty();
        if(frm.$valid){

            ApiService.hm_save_product($scope.form_data).then(function(res){

                ApiService.notification(res.msg, 'success');

                $state.go('products');

            });

        } else {

            ApiService.notification('Please fill all required fields', 'error');

        }

    };



    $scope.edit = function(data){

        $scope.form_data = data;

        $('#addNewAppModal').modal('show');

    };



    $scope.delete = function(data){

        $scope.pageInfo.actionId = data;

        $('#deleteAppModal').modal('show');

    };



    $scope.delete2 = function(id){

        ApiService.hm_delete_product($scope.pageInfo.actionId).then(function(res){

            $('#deleteAppModal').modal('hide');

            ApiService.notification(res.msg, 'success');

            ApiService.hm_products().then(function(res){

                $scope.totalItems = res.data;

            });

        });

    };



    $scope.change_status = function(st, id){

        ApiService.hm_change_product_status(st, id).then(function(res){

            ApiService.notification(res.msg, 'success');

            ApiService.hm_products().then(function(res){

                $scope.totalItems = res.data;

            });

        });

    };

}