'use strict';

angular.module('Assesment', ['ui.router', 'angularUtils.directives.dirPagination'])
	.config([ '$stateProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");
		$stateProvider
      		.state('new', {
	        	url: '/new',
	       		template: '<div>Message<div>',
      })
	}]);