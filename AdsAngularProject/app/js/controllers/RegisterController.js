app.controller('RegisterController', function ($scope, authentication) {
    $scope.register = function (user) {
        
        authentication.register(scx, user)
    }
    function scx(data) {
        alert(data);
    }
})