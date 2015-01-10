app.controller('IndexPageController', function ($scope, $location, authentication) {

    
    $scope.showLoginRegisterNav = true;
    $scope.showUserNav = false;
    $scope.showAdminNav = false;

    $scope.$on('$routeChangeStart', function (next, current) {

        if (($location.$$url.substring(0, 5) == '/user' || $location.$$url.substring(0, 6) == '/admin') && sessionStorage.getItem('loginResponse')) {

            //$scope.username = authentication.getSession().username;
            //$scope.showLoginRegisterNav = false;
            //$scope.showUserNav = true;
            if (authentication.isUserAdmin()) {
                $scope.showAdminNav = true;
                $scope.showLoginRegisterNav = false;
                $scope.showUserNav = false;
            }
            else { // is User
                $scope.username = authentication.getSession().username;
                $scope.showLoginRegisterNav = false;
                $scope.showUserNav = true;
                $scope.showAdminNav = false;
            }
        }
        else {
            $scope.showLoginRegisterNav = true;
            $scope.showUserNav = false;
            $scope.showAdminNav = false;
        }
    });

    $scope.logout = function () {
        
        sessionStorage.clear();
        $location.path('/ads');
    }
});