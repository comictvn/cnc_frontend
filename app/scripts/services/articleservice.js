'use strict';

/**
 * @ngdoc service
 * @name cncFrontendApp.ArticleService
 * @description
 * # ArticleService
 * Service in the cncFrontendApp.
 */
var services = angular.module('ArticleService', ['ngResource']);

services
	.factory('AllArticle', ['$resource', 'ENV', function($resource, ENV) {
		return $resource(ENV.apiEndpoint + '/api/articles/:id');
	}])
	.factory('AllTemplate', ['$resource', 'ENV', function($resource, ENV) {
		return $resource(ENV.apiEndpoint + '/api/templates/:id')
	}])
	.factory('AllCategory', ['$resource', 'ENV', function($resource, ENV) {
		return $resource(ENV.apiEndpoint + '/api/categories/:id')
	}])
	.factory('AuthFacebook', ['$resource', 'ENV', function($resource, ENV) {
		return $resource('http://localhost:3000/auth/facebook')
	}])

