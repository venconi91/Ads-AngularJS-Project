app.controller('AllUserAdsController', function ($scope, $log, $route, userAdsData) {


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
        userAdsData.deleteAd(id)
            .$promise
			.then(function (data) {
			    console.log(data);
			    $route.reload();
			},
			function (error) {
			    $log.error(error);
			});
    }

    $scope.publishAdAgain = function (id) {
        userAdsData.publishAdAgain(id)
            .$promise
			.then(function (data) {
			    console.log(data);
			    $route.reload();
			},
			function (error) {
			    $log.error(error);
			});
    }

});