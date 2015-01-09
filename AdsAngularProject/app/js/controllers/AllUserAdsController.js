app.controller('AllUserAdsController', function ($scope, $log, $route, $location, userAdsData) {


    userAdsData.getAll()
			.$promise
			.then(function (data) {
			    //console.log(data);
			    $scope.allAds = data.ads;
			},
			function (error) {
			    $log.error(error);
			});

    $scope.myAdsFilter = function (myAdsFilter) {
        //console.log(myAdsFilter)
        $scope.currentStatus = myAdsFilter;
    }
    $scope.currentStatus = '';
    $scope.deactivate = function (id) {
        userAdsData.deactivateAd(id)
			.$promise
			.then(function (data) {
			    //console.log(data);
			    $route.reload();
			},
			function (error) {
			    $log.error(error);
			});
    }
    $scope.showAdButtons = function (adStatus) {
        if (adStatus == 'Inactive') {
            return true;
        }
        else {
            return false;
        }
    }
    $scope.deleteAd = function (id) {
        $location.path('/user/ads/delete/' + id)
    }

    $scope.publishAdAgain = function (id) {
        userAdsData.publishAdAgain(id)
            .$promise
			.then(function (data) {
			    //console.log(data);
			    $route.reload();
			},
			function (error) {
			    $log.error(error);
			});
    }

    $scope.editAd = function (id) {
        //console.log(id)
        $location.path('/user/ads/' + id);
    }

});