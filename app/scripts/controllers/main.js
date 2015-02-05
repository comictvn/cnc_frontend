'use strict';

/**
 * @ngdoc function
 * @name cncFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cncFrontendApp
 */
angular.module('cncFrontendApp')
  .controller('MainCtrl', ['$scope', '$auth', 'localStorageService', 'createWebsiteService',
    function($scope, $auth, localStorageService, createWebsiteService) {
  	$scope.websiteManager = createWebsiteService;
    $scope.websiteManager.init();
    $scope.websiteManager.getField();
    $scope.websiteManager.getTemplate();
    $scope.pageClass = 'page-home';
    $scope.$parent.seo = {
		        pageTitle : 'Hệ thống xây dựng website chuyên nghiệp nhanh chóng | WebCNC',
		        pageDescripton: 'Tại WebCNC, chúng tôi tập trung tạo ra những sản phẩm với nhiều tính năng ưu việt kết hợp cùng những giao diện sáng tạo, sự chọn lựa tỉ mỉ về màu sắc, font chữ, hình ảnh, bộ icon... Tất cả những điều đó kết hợp với mục tiêu và đam mê tạo nên những sản phẩm website hoàn hảo, đồng hành cùng sự phát triển của doanh nghiệp '
		    };

	 	$scope.authenticate = function(provider) {
      $auth.authenticate(provider).then(function(reply) {
        localStorageService.set('token', reply.data.token);
        localStorageService.set('email', reply.data.email);
        localStorageService.set('uid', reply.data.uid);
      });
    };
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };

    $scope.createWebsite = function() {
      $scope.websiteManager.createWebsite();
    }

  }]);
