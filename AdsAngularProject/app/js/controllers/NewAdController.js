app.controller('NewAdController', function ($scope, $log,$timeout,$route, $location, mainData, userAdsData) {

    $scope.showSuccessMessage = false;

    $scope.publish = function (ad) {
        userAdsData.create(ad)
			.$promise
			.then(function (data) {
			    //console.log(data);
			    $scope.showSuccessMessage = true;
			    $timeout(function () {
			        $scope.showSuccessMessage = false;
			        $route.reload();
			    }, 3000);
			},
			function (error) {
			    $log.error(error);
        	});
	}
    mainData.getAllCategories(function (res) {
        $scope.categories = res;
    })
    mainData.getAllTowns(function (res) {
        $scope.towns = res;
    })

    $scope.reload = function () {
        $route.reload();
    }
    //$scope.rejectPicture = function () {
    //    $scope.ad.imageDataUrl = null;
    //}
});