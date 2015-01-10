app.controller('ConfirmDeleteTownController', function ($scope, $location, towns) {
    $scope.deleteAdConfirmed = function (id) {
        console.log('confirmed delete')
        console.log(townId);
        //towns.deleteTown(68)
        //    .$promise
        //	.then(function (data) {
        //        alert('deleted town success')
        //	},
        //	function (error) {
        //	    $log.error(error);
        //	});
    }
})