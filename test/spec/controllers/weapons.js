'use strict';

describe('Controller: WeaponsCtrl', function () {

  // load the controller's module
  beforeEach(module('infinityTheGameApp'));

  var WeaponsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WeaponsCtrl = $controller('WeaponsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
