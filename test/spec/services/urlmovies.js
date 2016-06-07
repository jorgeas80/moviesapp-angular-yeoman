'use strict';

describe('Service: urlMovies', function () {

  // load the service's module
  beforeEach(module('pelitweetsAngularYeomanApp'));

  // instantiate service
  var urlMovies;
  beforeEach(inject(function (_urlMovies_) {
    urlMovies = _urlMovies_;
  }));

  it('should do something', function () {
    expect(!!urlMovies).toBe(true);
  });

});
