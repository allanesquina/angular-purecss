
'use strict';

angular.module('pc.component.tab',[]).

directive('pctabs', function () {
    return {
        replace:true,
        restrict:'E',
        transclude:true,
        templateUrl:'templates/tab/tabs.html',
        scope:{},
        controller: tabsCtrl
    }

    function tabsCtrl($scope) {
        var tabs = $scope.tabs = [];

        this.addTab = function (tab) {
            if(tabs.length === 0) {
                tab.selected = true;
            }
            tabs.push(tab);
        };

        $scope.select = function (tab) {
           angular.forEach(tabs, function (tab) {
               tab.selected = false;
          });
          tab.selected = true;
        };
    }
})

.directive('pctab', function () {
    return {
        require:'^pctabs',
        replace:true,
        transclude:true,
        restrict:'E',
        templateUrl:'templates/tab/tab.html',
        scope:{
            title:'@'
        },
        link: linkTabFn
    }

    function linkTabFn(scope, element, attr, ctr) {
        ctr.addTab(scope);
    }
});
