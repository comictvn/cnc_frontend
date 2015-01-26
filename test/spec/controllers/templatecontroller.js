'use strict';

describe('Controller: TemplatecontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('cncFrontendApp'));

  var TemplatecontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TemplatecontrollerCtrl = $controller('TemplatecontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
