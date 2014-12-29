app.controller('IndexPageController', function ($scope, $location, authentication) {

    $scope.showLoginRegisterNav = true;
    $scope.showUserNav = false;

    $scope.$on('$routeChangeStart', function (next, current) {

        if ($location.$$url.substring(0, 5) == '/user') {
            $scope.showLoginRegisterNav = false;
            $scope.showUserNav = true;
        }
        else {
            $scope.showLoginRegisterNav = true;
            $scope.showUserNav = false;
        }
    });
});