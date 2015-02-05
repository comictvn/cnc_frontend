'use strict';

/**
 * @ngdoc overview
 * @name cncFrontendApp
 * @description
 * # cncFrontendApp
 *
 * Main module of the application.
 */
var appcnc = angular.module('cncFrontendApp', [
    'ngAnimate',
    'ngResource',
    'ui.router',
    'ngMap',
    'config',
    'ApplicationControllers',
    'AppFilter',
    'ngProgress',
    'myDirective',
    'satellizer',
    'LocalStorageModule'
  ]);

appcnc
 	.config(['$httpProvider', function ($httpProvider) {
	  //Reset headers to avoid OPTIONS request (aka preflight)
	  $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
	}])
	.config(['$httpProvider', function($httpProvider) {

    var authInterceptor = ['localStorageService', '$q', '$location', function(localStorageService, $q, $location) {
      return {
        request: function request(req) {
          req.headers = req.headers || {};
          if (localStorageService.get('token')) {
            req.headers.Authorization =
            localStorageService.get('email') + ':' +
            localStorageService.get('token');
          }
          return req || $q.when(req);
        },
        responseError: function responseError(res) {
          if (res.status === 401) {
            localStorageService.remove('email');
            localStorageService.remove('token');
            localStorageService.remove('uid');
            $location.path('/');
          }
          return $q.reject(res);
        }
      };
    }];
    $httpProvider.interceptors.push(authInterceptor);
  }])
	.config(function($authProvider) {
		$authProvider.facebook({
      clientId: '415033582006044'
    });
	})
	.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	  $urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/home.html',
				controller: 'MainCtrl',
	      data : { pageTitle: 'Home' }
			})
			.state('about', {
				url: '/gioi-thieu',
				templateUrl: 'views/about.html',
				controller: 'AboutcontrollerCtrl'
			})
			.state('article', {
	      abstract: true,
				url: '/bai-viet',
				templateUrl: 'views/articles/main.html',
				controller: 'ArticlecontrollerCtrl'
			})
	    .state('article.index', {
	      url: '',
	      templateUrl: 'views/articles/articles.html'
	    })
	    .state('article_detail', {
	      url: '/bai-viet/:id',
	      templateUrl: 'views/articles/article_detail.html',
	      controller: 'ArticleDetailcontrollerCtrl'
	    })
			.state('contact', {
				url: '/lien-he',
				templateUrl: 'views/contact.html',
				controller: 'ContactcontrollerCtrl'
			})
			.state('customer', {
				url: '/khach-hang',
				templateUrl: 'views/customer.html',
				controller: 'CustomercontrollerCtrl'
			})
			.state('price', {
				url: '/bang-gia',
				templateUrl: 'views/price.html',
				controller: 'PricecontrollerCtrl'
			})
			.state('template', {
				url: '/giao-dien',
				templateUrl: 'views/templates/template.html',
				controller: 'TemplatecontrollerCtrl'
			})
			.state('template_detail', {
				url: '/giao-dien/:id',
				templateUrl: 'views/templates/detail.html',
				controller: 'TemplateDetailCtrl'
			});
	})