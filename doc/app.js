angular.module('pc.demo', ['pc.component.button', 'pc.component.tab'])
.controller('pc.demo.ctr', ['$scope', function ($scope) {
   $scope.name = 'test';
}]);
