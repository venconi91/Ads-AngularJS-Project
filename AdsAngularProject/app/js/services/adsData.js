app.factory('userAdsData', function ($resource, $http, authentication) {

    var token = authentication.getToken.access_token;

	$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	
	var resource = $resource(
		'http://softuni-ads.azurewebsites.net/api/user/ads/:id', 
		{id: '@id'}, 
		{ update: {
			method: 'PUT'
		}
	});

	function getAllAds() {
		return resource.get();
	}

	function createNewAd(ad) {
		return resource.save(ad);
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