'use strict';

angular.module('infinityTheGameApp')
    .directive('weaponAmmoBurst', function () {
        return {
            restrict: 'E',
            replace: 'true',
            scope: {
                ammunition: '='
            },
            link: function postLink(scope, element) {
                var i, j, weaponAmmo;
                var ammoByBurst = new Array();
                for (i in scope.ammunition) {
                    weaponAmmo = scope.ammunition[i];
                    if(typeof ammoByBurst[weaponAmmo.burst] == 'undefined') {
                        ammoByBurst[weaponAmmo.burst] = new Array();
                    }
                    ammoByBurst[weaponAmmo.burst].push(weaponAmmo);
                }
                weaponAmmo = angular.element('<dl></dl>');
                ammoByBurst.sort(function(a,b) { return b -a });
                for (i in ammoByBurst) {
                  var burst = angular.element('<dt></dt>');
                  burst.text(ammoByBurst[i][0].burst);
                  weaponAmmo.append(burst);
                  var ammoBurst = ammoByBurst[i];
                  for (j in ammoBurst) {
                     var ammo = angular.element('<dd></dd>');
                     ammo.text(ammoBurst[j].id);
                     weaponAmmo.append(ammo);
                   }
                   element.append(weaponAmmo);
                }
            }
        };
    });
