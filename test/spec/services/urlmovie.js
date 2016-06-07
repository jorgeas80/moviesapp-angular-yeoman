'use strict';

describe('Service: urlMovie', function () {

  // load the service's module
  beforeEach(module('pelitweetsAngularYeomanApp'));

  // instantiate service
  var urlMovie;
  beforeEach(inject(function (_urlMovie_) {
    urlMovie = _urlMovie_;
  }));

  it('should do something', function () {
    expect(!!urlMovie).toBe(true);
  });

});
