'use strict';

describe('Filter: modifier', function () {

  // load the filter's module
  beforeEach(module('infinityTheGameApp'));

  // initialize a new instance of the filter before each test
  var modifier;
  beforeEach(inject(function ($filter) {
    modifier = $filter('modifier');
  }));

  it('should return the input prefixed with + or -:"', function () {
    var value = 3;
    expect(modifier(value)).toBe('+3');
  });

});
