'use strict';

/**
 * @ngdoc service
 * @name cncFrontendApp.ArticleService
 * @description
 * # ArticleService
 * Service in the cncFrontendApp.
 */
var services = angular.module('cncFrontendApp');

services
	.service('PageTitle', function() {
      var title = 'Productmate';
      return {
        title: function() { return title; },
        setTitle: function(newTitle) { title = newTitle; }
      };
    });

