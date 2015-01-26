'use strict';

/**
 * @ngdoc function
 * @name cncFrontendApp.controller:TemplatecontrollerCtrl
 * @description
 * # TemplatecontrollerCtrl
 * Controller of the cncFrontendApp
 */
var controllers = angular.module('ApplicationControllers')

controllers
  .controller('TemplatecontrollerCtrl', ['$scope', '$stateParams', 'AllTemplate', 'ngProgress', 
  	function ($scope, $stateParams, AllTemplate, ngProgress) {
  		// Loading Bar
  		ngProgress.start();
	    $scope.pageClass = 'page-template';
	    $scope.$parent.seo = {
		        pageTitle : 'Giao diện mẫu | tổng hợp bộ sưu tập giao diện web tại CNC',
		        pageDescripton: 'Tổng hợp tin tức thủ thuật công nghệ thông tin tại CNC '
		    };
	    //GET TEMPLATE
	    var templates = AllTemplate.query({},
	    	function success() {
	    		$scope.templates = templates;
	    		ngProgress.complete();
	    	});
  }])
  .controller('TemplateDetailCtrl', ['$scope', '$stateParams', 'AllTemplate', 'ngProgress', 
  	function ($scope, $stateParams, AllTemplate, ngProgress) {
  		// Loading Bar
  		$scope.pageClass = 'page-template-detail page-template';
  		ngProgress.start();

  		//GET TEMPLATE DETAIL
  		var template = AllTemplate.get({
  			id: $stateParams.id
  		}, function success() {
  			$scope.template = template;
  			$scope.$parent.seo = {
		        pageTitle : template.name,
		        pageDescripton: 'Tổng hợp tin tức thủ thuật công nghệ thông tin tại CNC '
		    };
            
  			ngProgress.complete();
  		})
  }])
