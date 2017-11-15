'use strict';

angular.module('Assessment', ['ui.router'])
	.controller( 'UserListCtrl', 
		['$scope', '$http',
		function ($scope, $http) {
		$scope.title = "Users";
		$scope.userList = [];

		$scope.getUserList = function() {
			return $scope.userList;
		}

		function fetchAllUsers() {
	      $http.get('http://js-assessment-backend.herokuapp.com/users.json').then(function (response) {
	        $scope.userList = response.data;
	      });
	    }

	    fetchAllUsers();

		}]);