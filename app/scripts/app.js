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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
