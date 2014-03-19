'use strict';

describe('Directive: weaponRange', function () {

  // load the directive's module
  beforeEach(module('infinityTheGameApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<weapon-range></weapon-range>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the weaponRange directive');
  }));
});
