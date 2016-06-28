
(function() {
  var app = angular.module('world', [ ]);

  app.controller("contriesCtrl", function($scope, $http) {
      $http.get("countries.json").success(function(response){
          $scope.countries = response;
      });
      $http.get("cities.json").success(function(response){
          $scope.cities = response;
      });

      this.addCity = function(city) {
	      //if(city) {
              $scope.cities.push(this.city);
              this.city = {};
	      //}
      };
      this.remCity = function(city) {
          var array = $scope.cities;
          for (var i = 0; i < array.length; i++) {
              if (array[i] === city) {
                  array.splice(i,1);
                  return 0;
              }
          }
      };
  
    });

})();
