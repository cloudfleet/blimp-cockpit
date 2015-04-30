'use strict';

describe('Service: cockpit.api', function () {

  // load the service's module
  beforeEach(module('blimpCockpitApp'));

  // instantiate service
  var cockpit.api;
  beforeEach(inject(function (_cockpit.api_) {
    cockpit.api = _cockpit.api_;
  }));

  it('should do something', function () {
    expect(!!cockpit.api).toBe(true);
  });

});
