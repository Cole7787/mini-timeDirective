angular.module('timeApp')
.directive('showTime', function(){
  return {
    restrict: 'E',
    template: '<div> The current time is {{time | date: "short"}} </div>',
    link: function(scope, element, attrs){
      var currentTime = new Date();
      scope.time = currentTime.toString();
    }
  }
})
