(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
    $scope.list = [];
    
 
    
    $scope.sayM = function() {
        var words = $scope.list.split(' ');
        
    if (words.length <= 3) {
        $scope.justSay = 'Enjoy';
    } else if (words.length > 3) {
        $scope.justSay = 'Too much';
    } else {
        $scope.justSay = 'none';
    } 
    $scope.fontStyle = {
        "color":"green"
        };
        $scope.boxStyle = {
        "border-color":"green"
        };
  
}
    
    
    };
    






    
})();
