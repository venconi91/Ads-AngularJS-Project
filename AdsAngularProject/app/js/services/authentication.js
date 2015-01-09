app.factory('authentication', function ($http, $log) {

    var registerResponse = '';
    var loginResponse = '';
    var isAuthenticated = false;


    function toJSON(obj) {
        return angular.toJson(obj);
    }

    function register(success, user) {
        $http({
            method: 'POST',
            url: 'http://softuni-ads.azurewebsites.net/api/user/register',
            data: toJSON(user), // s polzwane na var userInJson = angular.toJson(user); ba4ka
        }).success(function (data) {            
            success(data)
        }).error(function (data) {
            $log.warn(data)
        })
    }

    // LOGIN
    function login(loginData,success, error) {
        $http({
            method: 'POST',
            url: 'http://softuni-ads.azurewebsites.net/api/user/login',
            data: toJSON(loginData),
        }).success(function (data) {
            sessionStorage.setItem('access_token', data.access_token)
            success(data)
        }).error(function (data) {
            $log.warn(data)
            error(data)
        })
    }
    
    return {
        login: login,
        register: register,
        isAuthenticated: isAuthenticated,
        getToken: registerResponse
        //getAllTowns: getAllTowns
    }
});