(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.empty = "";
        $scope.justSay = "";

        $scope.checkTooMuch = function () {
            if ($scope.empty === "") {
                $scope.justSay = "Please enter data first";
                $scope.fontStyle = {
                    "color":"red"
                    };
                    $scope.boxStyle = {
                    "border-color":"red"
                    };
                return;
            }
            var msg = $scope.empty.split(" ");
            if (msg.length <= 3) {
                $scope.justSay = "Enjoy!";
                $scope.fontStyle = {
                    "color":"green"
                    };
                    $scope.boxStyle = {
                    "border-color":"green"
                    };
            } else $scope.justSay = "Too much!";
            $scope.fontStyle = {
                "color":"green"
                };
                $scope.boxStyle = {
                "border-color":"green"
                };
        };
    }
})();
