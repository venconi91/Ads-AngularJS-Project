app.factory('authentication', function ($http, $log) {

    var registerResponse = '';
    var loginResponse = '';

    function toJSON(obj) {
        return angular.toJson(obj);
    }

    function register(success, user) {
        /*$http.post('http://softuni-ads.azurewebsites.net/api/user/register', user)
            .success(function (data, status, headers, config) {
                registerResponse = data;
                success(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn('data')
            })*/

        //console.log(user);
        //var userInJson = angular.toJson(user);
        //console.log(userInJson)

        $http({
            method: 'POST',
            url: 'http://softuni-ads.azurewebsites.net/api/user/register',
            data: toJSON(user), // s polzwane na var userInJson = angular.toJson(user); ba4ka
        }).success(function (data) {
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
            loginResponse = data;
            success(data)
        }).error(function (data) {
            $log.warn(data)
        })
    }
    
    /*
    function getAllTowns(success) {
        $http.get('http://softuni-ads.azurewebsites.net/api/towns')
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn('data')
            })
    }
    */
    return {
        login: login,
        register: register,
        isAuthenticated: registerResponse != '',
        getToken: registerResponse
        //getAllTowns: getAllTowns
    }
});