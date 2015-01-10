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

    function getTowns() {
        setToken();
        return resource.get()
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
        getTowns: getTowns,
        deleteTown: deleteTown,
        editTown: editTown,
        createNewTown: createNewTown
    }
});