'use strict';

/**
 * @ngdoc service
 * @name cncFrontendApp.createWebsiteService
 * @description
 * # createWebsiteService
 * Service in the cncFrontendApp.
 */
angular.module('Website', ['ngResource'])
  .factory('createWebsiteService', ['$resource', 'ENV', '$stateParams', 'localStorageService',
  	function createWebsiteService($resource, ENV, $stateParams, localStorageService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
  	var websitesManager = {
  		init: function() {
  			var self = this;
  			var webObj = {
  				website: {
  					storename: '',
  					name: '',
  					email: '',
  					phone: '',
  					address: '',
  					domain: '',
  					user_id: localStorageService.get('uid'),
  					field_website_id: '',
  					template_id: '',
  				}
  			}
  			self.website = webObj;
  		},
  		getField: function () {
  			var self = this;
  			var field = $resource(ENV.apiEndpoint + '/api/field_websites').query({

  			}, function success() {
  				self.field = field;
  			});
  		},
  		getTemplate: function() {
  			var self = this;
  			var templates = $resource(ENV.apiEndpoint + '/api/templates').query({

  			}, function success() {
  				self.templates = templates;
  			});
  		},
  		createWebsite: function() {
  			var self = this;
  			console.log(self.website.website);
  			var website = $resource(ENV.apiEndpoint + '/api/websites').save({

  			}, self.website.website ,function success() {
  				self.createSuccess = true;
  				$('.bs-example-modal-sm').modal('toggle');
  			});
  		}
  	}

  	return websitesManager;
  	
  }]);
