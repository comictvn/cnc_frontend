'use strict';

/**
 * @ngdoc function
 * @name cncFrontendApp.controller:ContactcontrollerCtrl
 * @description
 * # ContactcontrollerCtrl
 * Controller of the cncFrontendApp
 */
angular.module('cncFrontendApp')
  .controller('ContactcontrollerCtrl', function ($scope) {
    $scope.pageClass = 'page-contact';

    var map, marker;
    var infoWindow = new google.maps.InfoWindow({
      content:'CNC SoftWare Viet Nam <br /> Phone: 01697.106.101 <br /> Email : comictvn@gmail.com'
    });
    $scope.$on('mapInitialized', function(event, evtMap) {
      map = evtMap, marker = map.markers[0];
    });
    $scope.showInfoWindow = function() {
      infoWindow.open(map, marker);
    };
    
  });
