(function (angular) {
    'use strict';

    function ControllerFn($scope, User, Suggest, uiGmapGoogleMapApi) {


        $scope.suggests = [];
        $scope.misfiress = [];
        $scope.componentss = [];
        $scope.catalystss = [];
        $scope.evapss = [];
        $scope.acss = [];
        $scope.oxygenss = [];
        $scope.oxygenssh = [];
        $scope.egrss = [];
        function selectAll() {
            Suggest.query().$promise.then(function (data) {
                $scope.suggests = data;

                for (var i = 0; i < $scope.suggests.length; i++) {

                    if ($scope.suggests[i].types == "Misfire")
                        $scope.misfiress.push($scope.suggests[i]);
                    else if ($scope.suggests[i].types == "Components")
                        $scope.componentss.push($scope.suggests[i]);
                    else if ($scope.suggests[i].types == "Catalyst")
                        $scope.catalystss.push($scope.suggests[i]);
                    else if ($scope.suggests[i].types == "Evap System")
                        $scope.evapss.push($scope.suggests[i]);
                    else if ($scope.suggests[i].types == "Ac Refrigerant")
                        $scope.acss.push($scope.suggests[i]);
                    else if ($scope.suggests[i].types == "Oxygen Sensors")
                        $scope.oxygenss.push($scope.suggests[i]);
                    else if ($scope.suggests[i].types == "Oxygen Sensors Heater")
                        $scope.oxygenssh.push($scope.suggests[i]);
                    else if ($scope.suggests[i].types == "EGR System")
                        $scope.egrss.push($scope.suggests[i]);

                }
            });

        }

        selectAll();

        var getUser = function () {
            $scope.user = JSON.parse(sessionStorage.user);
            $scope.mistakes = $scope.user.car.mistakes;
            $scope.misfire = $scope.user.car.last_diagnostics.misfire;
            $scope.egr_system = $scope.user.car.last_diagnostics.egr_system;
            $scope.oxygen_sensor_heater = $scope.user.car.last_diagnostics.oxygen_sensor_heater;
            $scope.oxygen_sensor = $scope.user.car.last_diagnostics.oxygen_sensor;
            $scope.acRefgigerant = $scope.user.car.last_diagnostics.acRefgigerant;
            $scope.evap_system = $scope.user.car.last_diagnostics.evap_system;
            $scope.catalyst = $scope.user.car.last_diagnostics.catalyst;
            $scope.components = $scope.user.car.last_diagnostics.components;

        }

        getUser();
        $scope.openCity = function(evt, cityName) {
            // Declare all variables
            var i, tabcontent, tablinks;

            // Get all elements with class="tabcontent" and hide them
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            // Get all elements with class="tablinks" and remove the class "active"
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }

            // Show the current tab, and add an "active" class to the button that opened the tab
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
        }

    }

    ControllerFn.$inject = ['$scope', 'User', 'Suggest', 'uiGmapGoogleMapApi'];
    angular.module("meanstack").controller("profilController", ControllerFn);
})(angular);