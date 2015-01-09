app.controller('EditAdController', function ($scope, $routeParams, $timeout, $location, userAdsData, mainData) {

    var adId = $routeParams.id;
    $scope.showSuccessMessage = false;

    mainData.getAllTowns(function (res) {
        $scope.towns = res;
    })

    mainData.getAllTowns(function (res) {
        $scope.towns = res;
    })

    mainData.getAllCategories(function (res) {
        $scope.categories = res;
    })

    userAdsData.getById(adId)
            .$promise
			.then(function (data) {
			    $scope.ad = data;
			    $scope.oldImage = data.imageDataUrl;
			    //console.log(data.imageDataUrl);
			},
			function (error) {
			    $log.error(error);
			});

    $scope.edit = function (ad) {
        var editAdObj = {
            "title": ad.title,
            "text": ad.text,
            "changeimage": ad.changeImage || false,
            "ImageDataURL": ad.imageDataUrl,
            "categoryid": ad.categoryId,
            "townid": ad.townId
        }

        userAdsData.editAd(adId, editAdObj)
            .$promise
			.then(function (data) {
			    $scope.showSuccessMessage = true;
			    $timeout(function () {
			        $scope.showSuccessMessage = false;
			        $location.path('/user/ads');
			    }, 3000);
			},
			function (error) {
			    $log.error(error);
			});
    }

    $scope.changeImage = function () {
        $scope.ad.changeImage = true;
        $scope.oldImage = $scope.ad.imageDataUrl;
    }
    $scope.deleteImage = function () {
        $scope.oldImage = 'http://shop.camtecphoto.com/img/picture_placeholder.png'
        $scope.ad.imageDataUrl = null;
        $scope.ad.changeImage = true;
    }
});