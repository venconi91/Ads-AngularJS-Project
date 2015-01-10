var app = angular.module('softUniApp', ['ngResource', 'ngRoute', 'ui.bootstrap'])
.config(function ($routeProvider, $locationProvider) {
	$routeProvider.when('/newAd', {
		//templateUrl: 'templates/newAd.html',
		//controller: 'NewAdController'
	});
	$routeProvider.when('/ads', {
		templateUrl: 'templates/allAds.html',
		controller: 'AllAdsController'
	});
	$routeProvider.when('/ads/:adId', {
		templateUrl: 'templates/adDetails.html',
		controller: 'AdDetailsController'
	});
	$routeProvider.when('/login', {
	    templateUrl: 'templates/login.html',
	    controller: 'LoginController'
	});
	$routeProvider.when('/register', {
	    templateUrl: 'templates/register.html',
	    controller: 'RegisterController'
	});
    // 
	$routeProvider.when('/user/home', {
	    templateUrl: 'templates/allAds.html',
	    controller: 'AllAdsController'
	});
	$routeProvider.when('/user/ads/publish', {
	    templateUrl: 'templates/newUserAd.html',
	    controller: 'NewAdController'
	});
	$routeProvider.when('/user/ads', {
	    templateUrl: 'templates/allUserAds.html',
	    controller: 'AllUserAdsController'
	});
	$routeProvider.when('/user/ads/:id', {
	    templateUrl: 'templates/editAd.html',
	    controller: 'EditAdController'
	});
	$routeProvider.when('/user/profile', {
	    templateUrl: 'templates/profile.html',
	    controller: 'ProfileController'
	});
	$routeProvider.when('/user/ads/delete/:id', {
	    templateUrl: 'templates/confirmDeleteAd.html',
	    controller: 'ConfirmDeleteAdController'
	});
	$routeProvider.otherwise({
	    redirectTo: '/ads'
	});
	//$locationProvider.html5Mode(true);
});