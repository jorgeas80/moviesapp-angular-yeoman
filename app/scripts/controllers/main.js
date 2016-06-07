'use strict';

/**
 * @ngdoc function
 * @name pelitweetsAngularYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pelitweetsAngularYeomanApp
 */
angular.module('pelitweetsAngularYeomanApp')
  .controller('MainCtrl', function ($rootScope, getMoviesFactory) {

    var vm = this;

    // Default value
    vm.movies = getMoviesFactory.movies;

    // Useful fields
    vm.filterText = '';
    vm.orderBy = 'movie_release_date';
    vm.reverse = false;
    vm.error = false;

    // This method changes the order of the table's data
    vm.setOrder = function(order) {
      if (order === vm.orderBy) {
        vm.reverse = !vm.reverse;
      }

      vm.orderBy = order;
    };

    // This method will be called with each movie as argument. It's the other way to call orderBy filter: with a
    // function that will be applied over each element, and will return a data that will be used as criterium to
    // order the elements
    vm.runtimeNumber = function(movie) {
      var arr = movie.movie_runtime.split(' ');

      if (arr && arr.length > 0) {
        var n = Number(arr[0]);
        if (!isNaN(n)) {
          return n;
        }

        else {
          return 0;
        }

      }

      else {
        return 0;
      }
    };

    // Get movies from factory
    getMoviesFactory
      .getMovieList()
      .then(
        function success() {
          vm.movies = getMoviesFactory.movies;

        },

        function error() {
          vm.movies = getMoviesFactory.movies;
          vm.error = true;
        }
      );


    // Just to capture the data sent from the navbar controller
    $rootScope.$on('NavCtrl:filterText', function (event, data) {
      vm.filterText = data;
    });
  });
