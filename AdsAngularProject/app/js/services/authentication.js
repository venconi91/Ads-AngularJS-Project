app.factory('authentication', function ($http, $location, $log) {

    var loginResponse;

    var isAuthenticated = false;
    var isAdmin = false;

    function toJSON(obj) {
        return angular.toJson(obj);
    }
    function getSession() {
        return angular.fromJson(sessionStorage.getItem('loginResponse'));
    }

    function register(success, user) {
        $http({
            method: 'POST',
            url: 'http://softuni-ads.azurewebsites.net/api/user/register',
            data: toJSON(user),
        }).success(function (data) {
            sessionStorage.setItem('access_token', data.access_token);
            sessionStorage.setItem('loginResponse', toJSON(data));
            isAuthenticated = true;
            loginResponse = data;
            success(data)
        }).error(function (data) {
            $log.warn(data)
        })
    }

    // LOGIN
    function login(loginData, success, error) {
        $http({
            method: 'POST',
            url: 'http://softuni-ads.azurewebsites.net/api/user/login',
            data: toJSON(loginData),
        }).success(function (data) {
            isAuthenticated = true;
            sessionStorage.setItem('access_token', data.access_token);
            sessionStorage.setItem('loginResponse', toJSON(data));
            loginResponse = data;
            success(data)
            if (data.isAdmin == "true") {
                isAdmin = true;
                $location.path('/admin/ads');
            }
            else {
                $location.path('/user/home')
            }
            
        }).error(function (data) {
            $log.warn(data)
            error(data)
        })
    }
    function getLoginResponse() {
        return loginResponse;
    }
    function isUserAdmin() {
        return isAdmin;
    }

    return {
        login: login,
        register: register,
        isAuthenticated: isAuthenticated,
        getLoginResponse: getLoginResponse,
        getSession: getSession,
        isUserAdmin: isUserAdmin
        //getAllTowns: getAllTowns
    }
});