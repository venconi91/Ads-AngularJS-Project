app.factory('users', function ($resource, $http) {


    function toJSON(obj) {
        return angular.toJson(obj);
    }

    function setToken() {
        var token = sessionStorage.getItem('access_token');
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }

    var resource = $resource(
		'http://softuni-ads.azurewebsites.net/api/admin/users',
		{ id: '@id' },
		{
		    update: { method: 'PUT' },

		}
    );
    function getUsers() {
        setToken();
        return resource.get();
    }

    return {
        getUsers: getUsers
    }
})