'use strict';

angular.module('infinityTheGameApp')
  .directive('weaponRange', ['modifierFilter', function(modifier){

    console.log(modifier);
    return {
      restrict: 'E',
      replace: 'true',
      scope: {
        range: '='
      },

      link: function postLink(scope, element, attrs) {
        element.html('&mdash;');
        if (scope.range) {
          var range = scope.range;
          var string = range.start + '-' + range.end + ' (' + modifier(range.modifier) + ')';
          element.text(string);
        }
      }
    };
  }]);
