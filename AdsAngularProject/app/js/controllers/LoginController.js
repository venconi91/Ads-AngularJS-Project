app.controller('LoginController', function ($scope, authentication) {
    $scope.login = function (loginData) {
        authentication.login(function (data) { console.log(data) }, loginData);
    }
    
})