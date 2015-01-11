app.controller('AdminTownsController', function ($scope, $location, towns) {
    $scope.currentPage = 1;

    $scope.pageChanged = function () {
        getTowns();
    };
    $scope.adsPerPage = 3;

    //
    getTowns();

    var townId;
    

    function getTowns() {
        towns.getTownsWithPaging($scope.currentPage, $scope.townsPerPage)
			.$promise
			.then(function (data) {
			    //console.log(data);
			    $scope.towns = data.towns;
			    $scope.totalItems = data.numItems;
			    $scope.numberOfPages = data.numPages;
			},
			function (error) {
			    $log.error(error);
			});
    }
    $scope.edit = function (id, townName) {
        townId = id;
        $scope.townName = townName;
        $location.path('/admin/towns/edit/' + id)
        
    }
    $scope.delete = function (id, townName) {
        townId = id;
        $scope.townName = townName;
        $location.path('/admin/towns/delete/' + id)
    }
    
    $scope.newTown = function () {
        $location.path('/admin/towns/create');

    }
    $scope.createNewTown = function (town) {
        towns.createNewTown(town)
            .$promise
			.then(function (data) {
			    //console.log(data);
			    alert('new town created')
			},
			function (error) {
			    $log.error(error);
			});
    }
})