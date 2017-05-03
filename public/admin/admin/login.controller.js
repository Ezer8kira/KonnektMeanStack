(function (angular) {
    'use strict';

    function ControllerFn($scope,$state, User) {
        $scope.user = {};
        $scope.login = function(){
            var user = new User($scope.user);
            user.$login().then(function(data){
                if(data.status){
                    $state.go('admin');
                    sessionStorage.user = JSON.stringify(data.user);
                }else {
                    $scope.user = {};
                }
            })
        }

    }

    ControllerFn.$inject = ['$scope','$state', 'User'];
    angular.module("meanstackadmin").controller("loginController", ControllerFn);
})(angular);