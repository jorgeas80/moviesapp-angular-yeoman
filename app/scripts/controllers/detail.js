'use strict';

/**
 * @ngdoc function
 * @name pelitweetsAngularYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pelitweetsAngularYeomanApp
 */
angular.module('pelitweetsAngularYeomanApp')
  .controller('DetailCtrl', function ($routeParams, getMoviesFactory) {
    var vm = this;

    vm.movie = getMoviesFactory.getMovieDetail($routeParams.id);
  });
