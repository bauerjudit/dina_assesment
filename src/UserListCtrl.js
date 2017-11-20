'use strict';

angular.module('Assessment', ['ui.router', 'angularUtils.directives.dirPagination'])
	.controller( 'UserListCtrl', 
		['$scope', '$http', '$state',
		function ($scope, $http, $state) {
		$scope.title = "Users";
		$scope.userList = [];

		$scope.updatedUser = function(updatedUser) {
			var userId = updatedUser.id;

	    	if ( updatedUser.status === false ) {
	    		updatedUser.status = 'locked'
	    	} else {
	    		updatedUser.status = 'active'
	    	}
      		$http.put('http://js-assessment-backend.herokuapp.com/users/' + userId + '.json', updatedUser.status);
		}

		$scope.addNewUser = function(newUser) {
			if ( newUser.status === false ) {
	    		newUser.status = 'locked';
	    	} else {
	    		newUser.status = 'active';
	    	}

			return $http.post('http://js-assessment-backend.herokuapp.com/users.json', newUser);
		}

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
	    	console.log(updatedUser)

	    	if ( updatedUser.status === false ) {
	    		updatedUser.status = {
	    			'status': 'locked'
	    		};
	    	} else {
	    		updatedUser.status = {
	    			'status': 'active'
	    		};
	    	}
      		$http.put('http://js-assessment-backend.herokuapp.com/users/' + userId + '.json', updatedUser.status).then(fetchAllUsers);
    	}

	    fetchAllUsers();

		}]);