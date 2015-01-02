app.controller('NewAdController', function ($scope, $log,$location, mainData, userAdsData) {
    $scope.publish = function (ad) {
        console.log('na4aloto na zaqvkata' + ad)
        userAdsData.create(ad)
			.$promise
			.then(function (data) {
				console.log(data);
				$location.path('/user/home');
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

    $scope.rejectPicture = function () {
        $scope.ad.imageDataUrl = null;
    }
});