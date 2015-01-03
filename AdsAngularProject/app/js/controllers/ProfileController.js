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
        //console.log($scope.towns)

    })

    $scope.updateProfile = function (profile) {
        //console.log(profile)
        var profileObj = {
            "name": profile.name,
            "email": profile.email,
            "phoneNumber": profile.phoneNumber,
            "townId": profile.townId
        }
        //console.log(profileObj)
        userProfile.editUserProfile(profileObj)
        .$promise
			.then(function (data) {
			    //console.log(data);
			    $route.reload();
			},
			function (error) {
			    $log.error(error);
			});
    }
});