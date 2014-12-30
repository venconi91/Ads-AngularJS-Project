app.controller('NewAdController', function ($scope, $log, mainData, userAdsData) {
    $scope.publish = function (ad) {
        userAdsData.create(ad)
			.$promise
			.then(function (data) {
				alert('Ad added: ' + data);
				$location.path('#/user/ads');
			},
			function (error) {
				$log.error(error);
        	});
        console.log(ad);
	}
    mainData.getAllCategories(function (res) {
        $scope.categories = res;
    })
    mainData.getAllTowns(function (res) {
        $scope.towns = res;
    })

    $scope.rejectPicture = function () {
        $scope.ad.imageDataUrl = null;
    }
});