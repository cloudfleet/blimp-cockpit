'use strict';

describe('Service: uiLoad', function () {

  // load the service's module
  beforeEach(module('blimpCockpitApp'));

  // instantiate service
  var uiLoad;
  beforeEach(inject(function (_uiLoad_) {
    uiLoad = _uiLoad_;
  }));

  it('should do something', function () {
    expect(!!uiLoad).toBe(true);
  });

});
