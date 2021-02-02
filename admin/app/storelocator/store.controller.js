angular.module('app')

        .controller('storeController', storeController);



storeController.$inject = ['$scope', '$state', '$rootScope', 'APIURL', '$http', 'ApiService']



function storeController($scope, $state, $rootScope, APIURL, $http, ApiService) {

    $scope.pagingSize = 5;

    $scope.dataPerPage = 10;

    $scope.totalItems = [];

    $scope.displayItems = [];



    $scope.pageInfo = {submitted: false};

    $scope.form_data = {};

    $scope.totalItems = [];


    
    if($state.current.name == 'store') {
        ApiService.hm_stores().then(function(res){
            $scope.totalItems = res.data;
        });
    } else if($state.current.name == 'edit_store') {
        ApiService.hm_get_store($state.params.id).then(function(res){
            $scope.form_data = res.data;
        });
    } 

    

    $scope.save = function(frm){

        $scope.pageInfo.submitted = true;
        frm.$setDirty();
        if(frm.$valid){

            ApiService.hm_save_store($scope.form_data).then(function(res){

                ApiService.notification(res.msg, 'success');

                $state.go('store');

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

        ApiService.hm_delete_store($scope.pageInfo.actionId).then(function(res){

            $('#deleteAppModal').modal('hide');

            ApiService.notification(res.msg, 'success');

            ApiService.hm_stores().then(function(res){

                $scope.totalItems = res.data;

            });

        });

    };



    $scope.change_status = function(st, id){

        ApiService.hm_change_store_status(st, id).then(function(res){

            ApiService.notification(res.msg, 'success');

            ApiService.hm_stores().then(function(res){

                $scope.totalItems = res.data;

            });

        });

    };

}