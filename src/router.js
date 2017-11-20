'use strict';

angular.module('Assesment', ['ui.router', 'angularUtils.directives.dirPagination'])
	.config([ '$stateProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/")
      		.state('new', {
      			name: 'new_user',
	        	url: '/new',
	       		template: '<div>ezazzz</div>'
      })
	}]);