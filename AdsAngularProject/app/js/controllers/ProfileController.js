app.controller('ProfileController', function ($scope, $route, $log,$timeout, userProfile, mainData) {

    $scope.showSuccessMessage = false;
    $scope.showEditPasswordError = false;

    userProfile.getUserProfile()
			.$promise
			.then(function (data) {
			    //console.log(data);
			    $scope.profile = data;
			    $scope.townId = data.townId;
			},
			function (error) {
			    $log.error(error);
			});

    mainData.getAllTowns(function (res) {
        $scope.towns = res;
    })

    $scope.updateProfile = function (profile) {
        var profileObj = {
            "name": profile.name,
            "email": profile.email,
            "phoneNumber": profile.phoneNumber,
            "townId": profile.townId
        }
        userProfile.editUserProfile(profileObj)
        .$promise
			.then(function (data) {
			    showSuccessMessage();
			},
			function (error) {
			    $log.error(error);
			});
    }

    $scope.changePass = function (password) {
        userProfile.changePassword(password)
        .$promise
			.then(function (data) {
                //console.log(data)
			    showSuccessMessage();
			},
			function (error) {
			    $log.error(error);
			    $scope.showEditPasswordError = true;
			    $timeout(function () {
			        $scope.showEditPasswordError = false;
			        $route.reload();
			    }, 3000);
			});
    }

    function showSuccessMessage() {
        $scope.showSuccessMessage = true;
        $timeout(function () {
            $scope.showSuccessMessage = false;
            $route.reload();
        }, 3000);
    }

    $scope.reload = function () {
        $route.reload();
    }
});