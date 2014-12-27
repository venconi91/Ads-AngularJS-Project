var app = angular.module('softUniApp', ['ngResource', 'ngRoute'])
.config(function ($routeProvider, $locationProvider) {
	$routeProvider.when('/newAd', {
		templateUrl: 'templates/newAd.html',
		controller: 'NewAdController'
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
	    //templateUrl: 'templates/login.html',
	    controller: 'LoginController'
	});
	$routeProvider.when('/register', {
	    //templateUrl: 'templates/register.html',
	    controller: 'RegisterController'
	});
	//$locationProvider.html5Mode(true);
});