app.factory('categories', function ($resource, $http) {

    //var token = authentication.getToken.access_token;
    //$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    function toJSON(obj) {
        return angular.toJson(obj);
    }

    function setToken() {
        var token = sessionStorage.getItem('access_token');
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }

    var resource = $resource(
		'http://softuni-ads.azurewebsites.net/api/admin/categories',
		{ id: '@id' },
		{
		    update: { method: 'PUT' },

		}
    );

    function getCategories() {
        setToken();

        return resource.get()
    }

    function getCategoriesWithPaging(startPage, pageSize) {
        setToken();
        return $resource('http://softuni-ads.azurewebsites.net' + '/api/admin/categories?pagesize=:pageSize&startpage=:startPage',
        {
            startPage: startPage,
            pageSize: pageSize
        }).get();
    }

    return {
        getCategoriesWithPaging: getCategoriesWithPaging,
    }
});