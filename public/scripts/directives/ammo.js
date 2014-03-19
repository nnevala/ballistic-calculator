'use strict';

angular.module('infinityTheGameApp')
  .directive('weaponAmmo', function () {
    return {
      restrict: 'E',
      replace: 'true',
      scope: {
          ammunition: '='
      },
      link: function postLink(scope, element) {
        var i, weaponAmmo;
        for (i in scope.ammunition) {
          weaponAmmo = scope.ammunition[i];
          var ammo = angular.element('<a></a>');
          ammo.attr('title', weaponAmmo.name);
          ammo.text(weaponAmmo.id);
          element.append(ammo);
        }
      }
    };
  });
