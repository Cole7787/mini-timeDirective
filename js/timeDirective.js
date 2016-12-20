angular.module('timeApp')
.directive('showTime', function(){
  return {
    restrict: 'E',
    template: '<div> The current time is {{time | date: "short"}} </div>',
    scope: {
      name: '='
    },
    controller: function(scope){
      $scope.time = new Date();
    }
  }
})
