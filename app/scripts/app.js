'use strict';

/**
 * @ngdoc overview
 * @name pelitweetsAngularYeomanApp
 * @description
 * # pelitweetsAngularYeomanApp
 *
 * Main module of the application.
 */
angular
  .module('pelitweetsAngularYeomanApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/detail/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl',
        controllerAs: 'detail'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
