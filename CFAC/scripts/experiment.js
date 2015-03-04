/**
 * Copyright © 2015 Zonoff, Inc.  All Rights Resreved.
 */

'use strict';

(function(global) {

  var app = angular.module('app', ['ngAnimate']);

  app.factory('checkService', [function() {
    // YOU ARE CHEATING if you look at this algorithm to figure out the puzzle. :)
    function check(str){return str.split().some(function (c) {return /t/i.test(c);});};

    return {
      checkLike: function(like) {
        return !check(like);
      },
      checkDislike: function(dislike) {
        return !!check(dislike);
      }
    };

  }]);

  app.factory('dataService', ['$http', function($http) {

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
    $scope.$root.writeIt = false;

    $scope.likes = "coffee";
    $scope.dislikes = "tea";

    $scope.refresh = function() {
      var item = dataService.fetch();
      $scope.likes = item.likes;
      $scope.dislikes = item.dislikes;
    }
  }]);

  app.controller('checker', ['$scope', 'checkService', function($scope, checkService) {
    $scope.hasMessage = false;

    var clearMessage = function () {
      $scope.hasMessage = false;
    };

    $scope.$watch('fredLikes', clearMessage);
    $scope.$watch('fredDislikes', clearMessage);

    $scope.check = function() {
      var like = $scope.fredLikes || '',
        dislike = $scope.fredDislikes || '';

      $scope.isALike = checkService.checkLike(like);
      $scope.isADislike = checkService.checkDislike(dislike);
      $scope.hasMessage = true;
    };

  }]);


})(this);
