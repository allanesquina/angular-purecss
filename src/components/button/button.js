
'use strict';

angular.module('pc.component.button',[])

.directive('pcbutton', function () {
   return {
       templateUrl:'templates/button/button.html',
       replace:true,
       transclude:true,
       restrict: 'E',
       scope:{
           active: '@',
           link: '@',
           type: '@'
       },
       link: btnLinkFn
   }
   function btnLinkFn(scope, element, attr) {
      scope.link = attr.link;
      scope.type = attr.type;
      scope.isActive = attr.active === 'true' ? 'pure-button-active' : '';
      scope.disabled = attr.disabled === 'true' ? 'pure-button-disabled' : '';
      scope.target = attr.target;
   }
});
