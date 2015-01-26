'use strict';

describe('Controller: CustomercontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('cncFrontendApp'));

  var CustomercontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomercontrollerCtrl = $controller('CustomercontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
