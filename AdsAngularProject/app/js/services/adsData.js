app.factory('userAdsData', function ($resource, $http, authentication) {

    //var token = authentication.getToken.access_token;

	//$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    function toJSON(obj) {
        return angular.toJson(obj);
    }

	var resource = $resource(
		'http://softuni-ads.azurewebsites.net/api/user/ads/:id', 
		{id: '@id'}, 
		{ update: {
			method: 'PUT'
		}
	});

	function getAllAds() {
	    var token = sessionStorage.getItem('access_token');
	    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	    return resource.get();
	}

	function createNewAd(ad) {
	    var adInJsonFormat = toJSON(ad)
	    var token = sessionStorage.getItem('access_token');
	    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

	    return resource.save(adInJsonFormat);
	}

	function getAdById(id) {
		return resource.get({id: id});
	}

	function editAd(id, ad) {
		return resource.update({id: id}, ad);
	}

	function deleteAd(id) {
		return resource.delete({id: id});
	}

	return {
		getAll: getAllAds,
		create: createNewAd,
		getById: getAdById,
		edit: editAd,
		//delete: deleteAd
	}
});