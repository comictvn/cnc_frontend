'use strict';

describe('Service: createWebsiteService', function () {

  // load the service's module
  beforeEach(module('cncFrontendApp'));

  // instantiate service
  var createWebsiteService;
  beforeEach(inject(function (_createWebsiteService_) {
    createWebsiteService = _createWebsiteService_;
  }));

  it('should do something', function () {
    expect(!!createWebsiteService).toBe(true);
  });

});
