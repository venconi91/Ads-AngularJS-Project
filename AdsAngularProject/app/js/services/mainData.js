app.factory('mainData', function ($http, $log, $resource) {

    //$http.defaults.headers.common['Authorization'] = 'Bearer kMBG9c7ExYfr8dnvPXF6UlI5lVtfpBZ9vtkzk0KL6eEzLYlRDQpCn1vDj90p-ogrwavSO8WBHukr6mRwDTNNmEdHWj3O0wubnynd9EQtWBe5kouA1pPiVniVOSjpDUNX8Wkc5OKuiuWkrnLb49OLJfhh1KIHmswnnj03LedLOQtNlHnHDKDvtK0G_aiwtLrZbHdBZi7tpLpUh3WAJYddWHPzPGBWh-3PndsA6zaQ2Bjkz1ZLVRmsyYISsXIuv2JdwW5mseyCIZ1f-V5YZzCC23bcImiTm212VkGmPYSmzqZTsFI5wDYRzWTIZmxNwXCUU79pe_H51OL2B-_l8Tj43nbFg_ASmcbko0I7vqGiOR22n-lwiBlwUvKiWiJy3RSMjohAZt47XOx1wUJB7eQ_0K5hXT4gFQCXrU0XfN67uYcaibY4-5RlmRHKPKHXtDo9HpIfqM-QRSxFJG2ZEc-k-I4R6F2ZG8YFnl7MrfA4AIM';

    function getAllAds(success) {
        $http.get('http://softuni-ads.azurewebsites.net/api/ads')
            .success(function (data, status, headers, config) {
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

    //function getAdsWithPaging(success) {
        
    //    $http.get(urlFilter) //  + categoryId + '&townId='+townId+'&pagesize=3&startpage=' + startPage
    //        .success(function (data, status, headers, config) {
    //            success(data);
    //        })
    //        .error(function (data, status, headers, config) {
    //            $log.warn('data')
    //        })
    //}

    function getAdsWithPaging(categoryId, townId, startPage) {
        return $resource('http://softuni-ads.azurewebsites.net' + '/api/Ads?CategoryId=:categoryId&TownId=:townId&StartPage=:startPage',
        {
            categoryId: categoryId,
            townId: townId,
            startPage: startPage,
            pagesize:3
        }).get();
    }

    return {
        getAllAds: getAllAds,
        getAllCategories: getAllCategories,
        getAllTowns: getAllTowns,
        getAdsWithPaging: getAdsWithPaging
    }
});