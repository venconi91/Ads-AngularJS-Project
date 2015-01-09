app.controller('RegisterController', function ($scope, $location, authentication, mainData) {

    $scope.register = function (user) {
        authentication.register(success, user)
    }
    function success(data) {
        $location.path('/user/home')
    }
    mainData.getAllTowns(function (res) {
        $scope.towns = res;
    })
})