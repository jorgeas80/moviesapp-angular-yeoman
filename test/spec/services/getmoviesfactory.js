'use strict';

describe('Service: getMoviesFactory', function () {

  // load the service's module
  beforeEach(module('pelitweetsAngularYeomanApp'));

  // instantiate service
  var getMoviesFactory;
  beforeEach(inject(function (_getMoviesFactory_) {
    getMoviesFactory = _getMoviesFactory_;
  }));

  it('should do something', function () {
    expect(!!getMoviesFactory).toBe(true);
  });

});
