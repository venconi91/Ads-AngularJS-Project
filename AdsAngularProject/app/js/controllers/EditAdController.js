app.controller('EditAdController', function ($scope, $routeParams, userAdsData, mainData) {

    var adId = $routeParams.id;

    mainData.getAllTowns(function (res) {
        $scope.towns = res;
    })

    mainData.getAllTowns(function (res) {
        $scope.towns = res;
    })

    mainData.getAllCategories(function (res) {
        $scope.categories = res;
    })

    userAdsData.getById(adId)
            .$promise
			.then(function (data) {
			    console.log(data);
			    $scope.ad = data;
			},
			function (error) {
			    $log.error(error);
			});

    $scope.edit = function(ad){
        console.log(ad);
    }
});