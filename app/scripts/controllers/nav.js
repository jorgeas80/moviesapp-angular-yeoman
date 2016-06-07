'use strict';

/**
 * @ngdoc function
 * @name pelitweetsAngularYeomanApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the pelitweetsAngularYeomanApp
 */
angular.module('pelitweetsAngularYeomanApp')
  .controller('NavCtrl', function ($rootScope) {

    // As we'll watch a function, we need to capture the context of 'this' here
    var vm = this;

    vm.showInput = true;
    vm.filterText = '';

    // Inside of the function, we can't use 'this.filterText'
    $rootScope.$watch(function() { return vm.filterText; }, function () {
      $rootScope.$emit('NavCtrl:filterText', vm.filterText);
    });

    // Receive the message to show/hide the input
    $rootScope.$on('NavCtrl:showInput', function(event, data) {
      vm.showInput = data;
    });

  });
