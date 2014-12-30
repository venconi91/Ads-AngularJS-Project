app.controller('AllUserAdsController', function ($scope, $log, userAdsData) {


    $scope.allAds = userAdsData.getAll;



    //$scope.currentCategory = ''
    //$scope.categoryClicked = function (categoryId) {
    //    $scope.currentCategory = categoryId;
    //}
    //$scope.currentTown = ''
    //$scope.townClicked = function (townId) {
    //    $scope.currentTown = townId;
    //}

});