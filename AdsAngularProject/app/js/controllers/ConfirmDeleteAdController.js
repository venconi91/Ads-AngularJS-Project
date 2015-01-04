app.controller('ConfirmDeleteAdController', function ($scope, $log, $location, $route, $routeParams, userAdsData) {

    var adId = $routeParams.id;

    userAdsData.getById(adId)
            .$promise
			.then(function (data) {
			    //console.log(data);
			    $scope.ad = data;
			},
			function (error) {
			    $log.error(error);
			});

    $scope.deleteAdConfirmed = function () {

        userAdsData.deleteAd(adId)
            .$promise
        	.then(function (data) {
        	    console.log(data);
        	    $location.path('/user/ads')
        	},
        	function (error) {
        	    $log.error(error);
        	});
    }

});