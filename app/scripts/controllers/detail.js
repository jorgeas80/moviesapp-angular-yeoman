'use strict';

/**
 * @ngdoc function
 * @name pelitweetsAngularYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pelitweetsAngularYeomanApp
 */
angular.module('pelitweetsAngularYeomanApp')
  .controller('DetailCtrl', function ($rootScope, $routeParams, getMoviesFactory) {

      /**
       * this.movie will hold the result of a $resource(...).get() call. So, there will be 2 phases:
       *
       *  1. At first, the object will contain a promise and a field named $resolved with value 'false', to indicate
       *  the promise is still not solved
       *  2. When the data arrives, the field $resolved becomes true, and the object will be transformed in a JSON
       *  object containing just the data. So, we can assume this will be a movie object
       *
       * Check the template code, to see how we use movie.$resolved to show/hide a div, and how we just use movie
       * as a plain json object when needed
       **/
    this.movie = getMoviesFactory.getMovieDetail($routeParams.id);

    // Send the message to hide the search form
    $rootScope.$emit('NavCtrl:showInput', false);
  });
