app.controller('LoginController', function ($scope, $location,$timeout, authentication) {
    $scope.showLoginError = false;

    $scope.login = function (loginData) {
        authentication.login(loginData,getLoginResponse, loginError);
    }
    function getLoginResponse(data) {
        //console.log(data);
        $location.path('/user/home')
    }
    function loginError() {
        $scope.showLoginError = true;
        $timeout(function () { $scope.showLoginError = false; }, 3000);
    }
})