var app = angular.module('softUniApp', ['ngResource', 'ngRoute'])
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
    // za korekciq nadolu wsi4ko
	$routeProvider.when('/user/home', {
	    templateUrl: 'templates/allAds.html',
	    controller: 'AllAdsController'
	});
	$routeProvider.when('/user/ads/publish', {
	    //templateUrl: 'templates/register.html',
	    //controller: 'RegisterController'
	});
	$routeProvider.when('/user/ads', {
	    templateUrl: 'templates/allUserAds.html',
	    controller: 'AllUserAdsController'
	});
	$routeProvider.when('/user/ads/delete/:id', {
	    //templateUrl: 'templates/register.html',
	    //controller: 'RegisterController'
	});
	$routeProvider.when('/user/profile', {
	    //templateUrl: 'templates/register.html',
	    //controller: 'RegisterController'
	});
	$routeProvider.otherwise({
	    redirectTo: '/ads'
	});
	//$locationProvider.html5Mode(true);
});