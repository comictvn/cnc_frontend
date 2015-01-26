'use strict';

var filters = angular.module('AppFilter', ["ngSanitize"]);
filters
	.filter('formatDate', [
		function () {
			return function (time) {
				if(time == null){ return ""; } 
  				var _date = $filter('date')(new Date(time), 'MMM dd yyyy');
  				return _date.toUpperCase();
			}
	}])