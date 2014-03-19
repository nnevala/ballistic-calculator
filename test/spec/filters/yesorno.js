'use strict';

describe('Filter: yesorno', function () {

  // load the filter's module
  beforeEach(module('infinityTheGameApp'));

  // initialize a new instance of the filter before each test
  var yesorno;
  beforeEach(inject(function ($filter) {
    yesorno = $filter('yesorno');
  }));

  it('should return the input prefixed with "yesorno filter:"', function () {
    var text = 'angularjs';
    expect(yesorno(text)).toBe('yesorno filter: ' + text);
  });

});
