/**
 * Copyright © 2015 Zonoff, Inc.  All Rights Resreved.
 */

'use strict';

(function(global) {

  var app = angular.module('app', []);

  app.factory('dataService', ['$http', '$q', function($http, $q) {

    var items = [];

    $http.get('data/data.json').then(function (response) {
      response.data.forEach(function (element) {
        items.push(element);
      });
    });

    var fetchNewPair = function() {
      var random = Math.floor(Math.random() * items.length);
      return items[random];
    };

    return {
      fetch: fetchNewPair
    };

  }]);

  app.controller('randomizer', ['$scope', 'dataService', function($scope, dataService) {

    $scope.likes = "coffee";
    $scope.dislikes = "tea";

    $scope.refresh = function() {
      var item = dataService.fetch();
      $scope.likes = item.likes;
      $scope.dislikes = item.dislikes;
    }
  }]);


})(this);
