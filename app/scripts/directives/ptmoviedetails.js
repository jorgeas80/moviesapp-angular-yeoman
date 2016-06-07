'use strict';

/**
 * @ngdoc directive
 * @name pelitweetsAngularYeomanApp.directive:ptMovieDetails
 * @description
 * # ptMovieDetails
 */
angular.module('pelitweetsAngularYeomanApp')
  .directive('ptMovieDetails', function () {
    return {
      templateUrl: 'templates/moviedetail.tpl.html',
      restrict: 'E',
      controller: 'DetailCtrl',
      controllerAs: 'detail',
      scope: {
        movie: '='
      },
      link: function postLink(scope, element, attrs) {
        console.log('We could manipulate the DOM here');
      }
    };
  });
