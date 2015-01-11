app.factory('towns', function ($resource, $http) {

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
		'http://softuni-ads.azurewebsites.net/api/admin/towns/:id',
		{ id: '@id' },
		{
		    update: { method: 'PUT' },
		    
		}
    );

    function getTownsWithPaging(startPage,pageSize) {
        setToken();
        return $resource('http://softuni-ads.azurewebsites.net' + '/api/admin/towns?pagesize=:pageSize&startpage=:startPage',
        {
            startPage: startPage,
            pageSize: pageSize
        }).get();
    }

    function deleteTown(id) {
        setToken();
        return resource.delete({ id: id });
    }
    function editTown(id, ad) {
        console.log('edit ad from service')
        setToken();
        //return resource.update({ id: id }, ad);
    }
    function createNewTown(town) {
        var townInJsonFormat = toJSON(town)
        setToken();
        return resource.save(townInJsonFormat);

    }

    return {
        getTownsWithPaging: getTownsWithPaging,
        deleteTown: deleteTown,
        editTown: editTown,
        createNewTown: createNewTown
    }
});