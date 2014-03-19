'use strict';

describe('Directive: ammowithburst', function () {

  // load the directive's module
  beforeEach(module('infinityTheGameApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ammowithburst></ammowithburst>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ammowithburst directive');
  }));
});
