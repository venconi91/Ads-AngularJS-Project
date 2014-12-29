app.controller('LoginController', function ($scope,$location, authentication) {
    $scope.login = function (loginData) {
        authentication.login(getLoginResponse, loginData);
    }
    function getLoginResponse(data) {
        //console.log(data);
        $location.path('/user/home')
    }
})