'use strict';

describe('Directive: ptMovieDetails', function () {

  // load the directive's module
  beforeEach(module('pelitweetsAngularYeomanApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pt-movie-details></pt-movie-details>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ptMovieDetails directive');
  }));
});
