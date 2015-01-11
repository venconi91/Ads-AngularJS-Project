app.controller('AdminUsersController', function ($scope,users) {

    users.getUsers()
			.$promise
			.then(function (data) {
			    //console.log(data);
			    $scope.users = data.users;
			    $scope.totalItems = data.numItems;
			    $scope.numberOfPages = data.numPages;
			},
			function (error) {
			    $log.error(error);
			});
})