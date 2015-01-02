﻿app.controller('AllUserAdsController', function ($scope, $log,$route, userAdsData) {


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
    //$scope.categoryClicked = function (categoryId) {
    //    $scope.currentCategory = categoryId;
    //}
    //$scope.currentTown = ''
    //$scope.townClicked = function (townId) {
    //    $scope.currentTown = townId;
    //}

});