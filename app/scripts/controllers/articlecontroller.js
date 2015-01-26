'use strict';

/**
 * @ngdoc function
 * @name cncFrontendApp.controller:ArticlecontrollerCtrl
 * @description
 * # ArticlecontrollerCtrl
 * Controller of the cncFrontendApp
 */
var controllers = angular.module('ApplicationControllers');
controllers
	.controller('ArticlecontrollerCtrl', ['$scope', '$stateParams', 'AllArticle', 'AllCategory','ngProgress',
		function($scope, $stateParams, AllArticle, AllCategory, ngProgress) {
			$scope.pageClass = 'page-new';
			$scope.$parent.seo = {
		        pageTitle : 'Bài viết | tổng hợp tin tức - sự kiện - thủ thuật công nghệ thông tin tại CNC',
		        pageDescripton: 'Tổng hợp tin tức thủ thuật công nghệ thông tin tại CNC '
		    };
		  ngProgress.start();
			var articles = AllArticle.query({}, 
				function success() {
					$scope.articles = articles;
					ngProgress.complete();
				})
			var categories = AllCategory.query({},
				function success() {
					$scope.categories = categories;
					ngProgress.complete();
				})
			var selectedCategory = null;
			$scope.selectCategory = function(newCategory) {
	      selectedCategory = newCategory;
	    }
	    $scope.categoryFilterFn = function(product) {
	      return selectedCategory == null || product.category_id == selectedCategory;
	    }
	}])
	.controller('ArticleDetailcontrollerCtrl', ['$scope', '$stateParams', 'AllArticle', 'ngProgress',
		function($scope, $stateParams, AllArticle, ngProgress) {
			ngProgress.start();
			var article = AllArticle.get({
				id: $stateParams.id
			}, function success() {
				$scope.article = article;
				$scope.$parent.seo = {
		        pageTitle : article.name,
		        pageDescripton: 'Tổng hợp tin tức thủ thuật công nghệ thông tin tại CNC '
		    };
		    ngProgress.complete();
			})
		}])