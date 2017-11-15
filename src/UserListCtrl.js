'use strict';

angular.module('Assessment', ['ui.router', 'angularUtils.directives.dirPagination'])
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

	    $scope.changeUserStatus = function(updatedUser) {
	    	var userId = updatedUser.id;

	    	if ( updatedUser.status === false ) {
	    		updatedUser.status = 'locked';
	    	} else {
	    		updatedUser.status = 'active';
	    	}
      		$http.put('http://js-assessment-backend.herokuapp.com/users/' + userId + '.json', updatedUser.status).then(fetchAllUsers);
    	}

	    fetchAllUsers();

		}]);