app.controller('AdminCategoriesController', function ($scope,categories) {
    getCategories();

    function getCategories() {
        categories.getCategories()
			.$promise
			.then(function (data) {
			    console.log(data);
			    $scope.categories = data.categories;
			},
			function (error) {
			    $log.error(error);
			});
    }
})