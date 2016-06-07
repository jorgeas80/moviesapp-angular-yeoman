'use strict';

/**
 * @ngdoc service
 * @name pelitweetsAngularYeomanApp.getMoviesFactory
 * @description
 * # getMoviesFactory
 * Factory in the pelitweetsAngularYeomanApp.
 */
angular.module('pelitweetsAngularYeomanApp')
  .factory('getMoviesFactory', function ($resource, $q, $http, urlMovies, urlMovie) {
    var f = {};

    // We will resolve the movies object here, in our service
    f.movies = [];
    f.movieDetail = {};

    // Returns a promise that will contain the movies
    f.getMovieList = function() {
      var defered = $q.defer();
      var promise = defered.promise;

      /**
       * We could just return $http.get(...) and let the caller handle the response. But we make the example a little
       * bit more complicated to show the use of $q object.
       *
       */
      $http
        .get(urlMovies, {cache: true})
        .then(
          function success(result) {
            f.movies = result.data;

            // We could do anything here with the data before resolving the promise...

            defered.resolve(f.movies);
          },

          function error() {
            f.movies = [];
            defered.reject(f.movies);
          }
        );

      return promise;
    };

    /**
     * Alternative implementation just using $resource.
     * $resource returns an object with 5 methods: get, save, query, remove, delete. If we call any of them, $http
     * is internally invoked, and when the promise is resolved, the object return by $resource is updated to contain
     * just the result of the $http call.
     *
     * So, at the end $resource is just a wrapper over $http that ease the calls to REST APIs
     f.getMovieList = function() {

      // The final value will be return. ngResource takes care of promise solving. But we can handle it by ourselves
      f.movies = $resource(urlMovies).query();

      return f.movies;
    };
     **/

    f.getMovieDetail = function(id) {
      f.movieDetail = $resource(urlMovie).get({id: id});

      return f.movieDetail;
    };

    // Just return the factory api here
    return f;

  });
