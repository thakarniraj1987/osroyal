'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('ApsilonApp')
	.directive('timeline',function() {
    return {
        templateUrl:'app/scripts/directives/timeline/timeline.html',
        restrict: 'E',
        replace: true,
    }
  });
