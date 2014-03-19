'use strict';

angular.module('infinityTheGameApp')
  .filter('modifier', function () {
    return function (input) {
        input = ~~Number(input);
        return (input > 0) ? '+' + input : input;
    };
  });
