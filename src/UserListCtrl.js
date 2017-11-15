'use strict';

angular.module('Assessment', ['ui.router'])
	.controller( 'UserListCtrl', 
		[ '$scope' , 
		function ($scope) {
			$scope.title = "Users";
		}]);