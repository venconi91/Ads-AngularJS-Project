app.factory('userAdsData', function ($resource, $http, authentication) {

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
		'http://softuni-ads.azurewebsites.net/api/user/ads/:id', 
		{id: '@id'}, 
		{
		    update: { method: 'PUT' },
		    deactivateAd: { method: 'PUT', url: 'http://softuni-ads.azurewebsites.net/api/user/ads/deactivate/:id' },
		    publishAdAgain: { method: 'PUT', url: 'http://softuni-ads.azurewebsites.net/api/user/ads/publishagain/:id' }
		}
    );

	function getAllAds() {
	    //var token = sessionStorage.getItem('access_token');
	    //$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	    setToken();
	    return resource.get();
	}

	function createNewAd(ad) {
	    var adInJsonFormat = toJSON(ad)
	    //var token = sessionStorage.getItem('access_token');
	    //$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	    setToken();
	    return resource.save(adInJsonFormat);
	}

	function deactivateAd(id) {
	    //var token = sessionStorage.getItem('access_token');
	    //$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	    setToken();
	    return resource.deactivateAd({ id: id })
	}

	function getAdById(id) {
	    //var token = sessionStorage.getItem('access_token');
	    //$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	    setToken();
		return resource.get({id: id});
	}

	function editAd(id, ad) {
	    setToken()
		return resource.update({id: id}, ad);
	}

	function deleteAd(id) {
	    //var token = sessionStorage.getItem('access_token');
	    //$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	    setToken();
		return resource.delete({id: id});
	}

	function publishAdAgain(id) {
	    setToken();
	    return resource.publishAdAgain({ id: id })
	}

	return {
		getAll: getAllAds,
		create: createNewAd,
		getById: getAdById,
		editAd: editAd,
        deactivateAd: deactivateAd,
        deleteAd: deleteAd,
        publishAdAgain: publishAdAgain,
	}
});