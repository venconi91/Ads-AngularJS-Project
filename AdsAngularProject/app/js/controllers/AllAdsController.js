app.controller('AllAdsController', function ($scope, $log,$location, mainData, authentication) {

    mainData.getAllAds(function (res) {
        $scope.allAds = res;
    })
    mainData.getAllCategories(function (res) {
        $scope.categories = res;
    })
    mainData.getAllTowns(function (res) {
        $scope.towns = res;
    })
    
    $scope.currentCategory = ''
    $scope.categoryClicked = function (categoryId) {
        $scope.currentCategory = categoryId;
    }
    $scope.currentTown = ''
    $scope.townClicked = function (townId) {
        $scope.currentTown = townId;
    }

    //if (authentication.isAuthenticated) {
    //    console.log(authentication.isAuthenticated)
    //    $scope.showLoginRegisterNav = false;
    //    $scope.showUserNav = true;
    //}
    //else {
    //    $scope.showLoginRegisterNav = true;
    //    $scope.showUserNav = false;
    //}
});