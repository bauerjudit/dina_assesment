'use strict';

angular.module('Assesment', ['ui.router'])
	.config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		//$urlRouterProvider.otherwise('/');
		$stateProvider
      		.state('frontpage', {
        	url: '/',
       		//templateUrl: './templates/userList.html',
        	controller: 'UserListCtrl',
	        data: {
	          pageTitle: 'List users',
	        },
      })
	}]);