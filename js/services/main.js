

	module.factory('dataService', function($http, $q) {

		this.getData = function(postData){

			var defer = $q.defer();

			jQuery.post(ajaxurl, postData, function(response) {
				defer.resolve(angular.fromJson(response));
			});

			return defer.promise;

		}

		return this;

	});
