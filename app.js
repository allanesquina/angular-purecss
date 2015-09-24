
'use strict';

var app = angular.module('di.demo',[]);
app.controller('di.ctrDemo', ['$scope', function ($scope) {
    $scope.name = 'Allan';
}]);

app.directive('dibutton', function () {
   return {
       templateUrl:'templates/button/button.html',
       replace:true,
       transclude:true,
       restrict: 'E'
   }
});

app.directive('ditabset', function () {
   return {
       templateUrl:'',
       replace:true,
       transclude:true,
       restrict: 'E'
   }
});
