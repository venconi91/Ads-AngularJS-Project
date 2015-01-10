app.controller('AllUserAdsController', function ($scope, $log, $route, $location, userAdsData) {

    
    $scope.currentPage = 1;

    $scope.pageChanged = function () {
        getUserAdsWithFilterStatus();
    };
    
    $scope.currentStatus = '';
    $scope.adsPerPage = 3;

    $scope.myAdsFilter = function (myAdsFilter) {
        $scope.currentStatus = myAdsFilter;
        getUserAdsWithFilterStatus();
    }
    getUserAdsWithFilterStatus();

    function getUserAdsWithFilterStatus() {
        userAdsData.getAllAdsWithStatusFilter($scope.currentStatus, $scope.currentPage, $scope.adsPerPage)
			.$promise
			.then(function (data) {
			    $scope.allAds = data.ads;
			    $scope.totalItems = data.numItems;
			    $scope.numberOfPages = data.numPages;
			},
			function (error) {
			    $log.error(error);
			});
    }

    $scope.deactivate = function (id) {
        userAdsData.deactivateAd(id)
			.$promise
			.then(function (data) {
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
			    $route.reload();
			},
			function (error) {
			    $log.error(error);
			});
    }

    $scope.editAd = function (id) {
        $location.path('/user/ads/' + id);
    }

});