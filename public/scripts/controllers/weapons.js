'use strict';

angular.module('infinityTheGameApp')
    .controller('WeaponsCtrl', ['$scope', 'Weapons', function($scope, Weapons) {
        $scope.weapons = Weapons.query();
        $scope.orderProp = 'name';
        $scope.ranges = [
            'short',
            'medium',
            'long',
            'maximum'
        ];
}]);
