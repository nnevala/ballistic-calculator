'use strict';

angular.module('infinityTheGameApp')
  .service('Weapons', function Weapons($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
        return $resource('/api/weapons/:weaponId.json', {}, {
            query: {method:'GET', params:{weaponId:'list'}, isArray:true}
        });
  });
