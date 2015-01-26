'use strict';

/**
 * @ngdoc directive
 * @name cncFrontendApp.directive:myDirective
 * @description
 * # myDirective
 */
 var directives = angular.module("myDirective", []);
 directives
 	.directive('fancybox', function() {
	  return {
	    restrict: 'A',
	    link: function(scope, element) {
	      if (scope.$last) setTimeout(function() {
	       $('.fancybox-thumbs').fancybox({
                prevEffect : 'none',
                nextEffect : 'none',

                closeBtn  : false,
                arrows    : false,
                nextClick : true,

                helpers : {
                  thumbs : {
                    width  : 50,
                    height : 50
                  }
                }
              });
	       }, 1);
	    }
	  };
	});