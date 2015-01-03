app.factory('userProfile', function ($resource, $http, authentication) {

    //var token = authentication.getToken.access_token;
    //$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    function toJSON(obj) {
        return angular.toJson(obj);
    }

    var resource = $resource(
		'http://softuni-ads.azurewebsites.net/api/user/profile',
		{},
		{
		    changePass: { method: 'PUT', url: 'http://softuni-ads.azurewebsites.net/api/user/changePassword', params: '@pass' },
		    editUserProfile: { method: 'PUT', url: 'http://softuni-ads.azurewebsites.net/api/user/profile' }
		}
    );

    function getUserProfile() {
        var token = sessionStorage.getItem('access_token');
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        return resource.get();
    }

    function changePassword(pass) {
        var token = sessionStorage.getItem('access_token');
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        return resource.changePassword({ params: pass })
    }

    function editUserProfile(profile) {
        var token = sessionStorage.getItem('access_token');
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        var profileJson = toJSON(profile);
        return resource.editUserProfile(profileJson)
    }

    return {
        getUserProfile: getUserProfile,
        changePassword: changePassword,
        editUserProfile: editUserProfile,
    }
});