app.controller('AllAdsController', function ($scope, $log, $location, mainData, userAdsData) {
    
    $scope.currentPage = 1;

    $scope.pageChanged = function () {
        getAdsWithPaging();
    };

    getAdsWithPaging();

    $scope.getNumberOfPages = function (num) {
        return new Array(num);
    }
    function getAdsWithPaging() {
        mainData.getAdsWithPaging($scope.currentCategory, $scope.currentTown, $scope.currentPage)
        .$promise
        .then(function (data) {
            $scope.totalItems = data.numItems;
            $scope.allAds = data;
            $scope.numberOfPages = data.numPages;
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

});

