app.controller('AdminCategoriesController', function ($scope,categories) {

    $scope.currentPage = 1;

    $scope.pageChanged = function () {
        getCategories();
    };
    $scope.adsPerPage = 3;
    //
    getCategories();

    function getCategories() {
        categories.getCategoriesWithPaging($scope.currentPage, $scope.townsPerPage)
			.$promise
			.then(function (data) {
			    //console.log(data);
			    $scope.categories = data.categories;
			    $scope.totalItems = data.numItems;
			    $scope.numberOfPages = data.numPages;
			},
			function (error) {
			    $log.error(error);
			});
    }
})