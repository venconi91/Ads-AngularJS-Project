app.controller('ProfileController', function ($scope, $route, $log, userProfile, mainData) {


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
			    $route.reload();
			},
			function (error) {
			    $log.error(error);
			});
    }

    $scope.changePass = function (password) {
        userProfile.changePassword(password)
        .$promise
			.then(function (data) {
			    alert('ba4ka');
                console.log(data)
			    $route.reload();
			},
			function (error) {
			    $log.error(error);
			});
    }
});