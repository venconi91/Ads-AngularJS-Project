app.controller('AllAdsController', function ($scope, $log, $location, mainData, userAdsData) {

    getAdsWithPaging();
    
    $scope.getNumberOfPages = function (num) {
        return new Array(num);
    }
    function getAdsWithPaging() {
        mainData.getAdsWithPaging($scope.currentCategory, $scope.currentTown, $scope.currentPage)
        .$promise
        .then(function (data) {
            $scope.allAds = data;
            $scope.numberOfPages = data.numPages
        }, function (error) {
            $log.error(error);
        })
        
    }
    
    mainData.getAllCategories(function (res) {
        $scope.categories = res;
    })
    mainData.getAllTowns(function (res) {
        $scope.towns = res;
    })

    $scope.currentCategory = ''
    $scope.categoryClicked = function (categoryId) {
        $scope.currentCategory = categoryId;
        getAdsWithPaging();
    }
    $scope.currentTown = ''
    $scope.townClicked = function (townId) {
        $scope.currentTown = townId;
        getAdsWithPaging();
    }

    $scope.currentPage = 1;
    //$scope.newPageClicked = function (pageNum) {
    //    $scope.currentPage = pageNum;
    //    getAdsWithPaging();
    //}
    $scope.prev = function () {
        $scope.currentPage--;
        getAdsWithPaging();
    }
    $scope.next = function () {
        $scope.currentPage++;
        getAdsWithPaging();
    }
});

