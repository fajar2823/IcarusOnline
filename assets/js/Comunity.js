var hide = angular.module('hide',[])
	hide.controller('hideController', function ($scope) {
		$scope.isVisible = false;
		$scope.ShowHide = function () {
			$scope.isVisible = $scope.isVisible = true;
			$scope.tombol = true;
		}
	});