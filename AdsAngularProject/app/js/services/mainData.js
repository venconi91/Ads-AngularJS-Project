app.factory('mainData', function ($http, $log) {
    
    function getAllAds(success) {
        $http.get('http://softuni-ads.azurewebsites.net/api/ads')
            .success(function (data, status, headers,config) {
                success(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn('data')
            })
    }
    function getAllCategories(success) {
        $http.get('http://softuni-ads.azurewebsites.net/api/categories')
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn('data')
            })
    }
    function getAllTowns(success) {
        $http.get('http://softuni-ads.azurewebsites.net/api/towns')
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn('data')
            })
    }

    return {
        getAllAds: getAllAds,
        getAllCategories: getAllCategories,
        getAllTowns: getAllTowns
    }
});