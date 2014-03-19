'use strict';

angular.module('infinityTheGameApp')
  .filter('yesorno', function () {
    return function(input) {
      return (input) ? 'yes' : 'no';
    };
  });
