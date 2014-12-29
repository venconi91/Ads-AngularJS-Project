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
            isAuthenticated = true;
            
            registerResponse = data;
            success(data)
        }).error(function (data) {
            $log.warn(data)
        })
    }

    // LOGIN
    function login(success, loginData) {
        $http({
            method: 'POST',
            url: 'http://softuni-ads.azurewebsites.net/api/user/login',
            data: toJSON(loginData),
        }).success(function (data) {
            isAuthenticated = true;
            loginResponse = data;
            success(data)
        }).error(function (data) {
            $log.warn(data)
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