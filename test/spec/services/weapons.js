'use strict';

describe('Service: Weapons', function () {

  // load the service's module
  beforeEach(module('infinityTheGameApp'));

  // instantiate service
  var Weapons;
  beforeEach(inject(function (_Weapons_) {
    Weapons = _Weapons_;
  }));

  it('should do something', function () {
    expect(!!Weapons).toBe(true);
  });

});
