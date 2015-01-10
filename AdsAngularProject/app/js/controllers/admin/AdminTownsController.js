app.controller('AdminTownsController', function ($scope, $location, towns) {

    getTowns();

    var townId;
    

    function getTowns() {
        towns.getTowns()
			.$promise
			.then(function (data) {
			    console.log(data);
			    $scope.towns = data.towns;
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