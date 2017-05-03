(function (angular) {
    'use strict';

    function ControllerFn($scope, User) {
        var user = new User();
        user.login = "admin";
        user.password = "admin";
        user.$login().then(function(data){
            sessionStorage.token = data.token;
            selectAll();
        });
        $scope.users = [];
        function selectAll() {
            User.query().$promise.then(function (data) {
                $scope.users = data;
            });
        }

    }

    ControllerFn.$inject = ['$scope', 'User'];
    angular.module("meanstackadmin").controller("adminController", ControllerFn);
})(angular);