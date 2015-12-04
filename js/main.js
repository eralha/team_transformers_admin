var module = angular.module('appModule', ['ngRoute']);

	module.config(function($routeProvider, $locationProvider) {
	  $routeProvider
	  .when('/all-users/', {
	  	controller: 'listAllSubscribersController',
	  	templateUrl : window.pluginsDir+'/ng-templates/backend/list__users.php'
	  })
	  .when('/my-users/', {
	  	controller: 'listSubscribersController',
	  	templateUrl : window.pluginsDir+'/ng-templates/backend/list__users.php'
	  })
	  .when('/user/:id', {
	  	controller: 'fichaUserController',
	  	templateUrl : window.pluginsDir+'/ng-templates/backend/ficha__user.php'
	  });

	  // configure html5 to get links working on jsfiddle
	  $locationProvider.html5Mode({
	  	enabled: false,
	  	requireBase: false
	  });
	});

	module.config(['$provide', function($provide){

        $provide.decorator('$rootScope', ['$delegate', function($delegate){
            Object.defineProperty($delegate.constructor.prototype, '$onRootScope', {
                value: function(name, listener){
                    var unsubscribe = $delegate.$on(name, listener);
                    this.$on('$destroy', unsubscribe);

                    return unsubscribe;
                },
                enumerable: false
            });
            return $delegate;
        }]);


        $provide.decorator('$rootScope', ['$delegate', function($delegate){
            Object.defineProperty($delegate.constructor.prototype, '$onTimeout', {
                value: function(name, handler, timer){

                	if($delegate[name + 'TimerId']){
						clearTimeout($delegate[name + 'TimerId']);
					}
                    $delegate[name + 'TimerId'] = setTimeout(function(){
                    	delete $delegate[name + 'TimerId'];
                    	handler();
                    }, timer);

                    return $delegate[name + 'TimerId'];
                },
                enumerable: false
            });
            return $delegate;
        }]);


    }]);

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

	module.controller('mainController', function($scope, dataService, $location) {

		$scope.isAdmin = window.isAdmin;

		if(window.isAdmin && $location.url() == ''){
			window.location = '#/all-users/';
		}

		if(!window.isAdmin && $location.url() == ''){
			window.location = '#/my-users/';
		}

		$scope.$on('$routeChangeStart', function(next, current) { 
			$scope.url = $location.url()
		});

		$scope.checkUrl = function(url){
			return (String($scope.url).indexOf(url) != -1) ? true : false;
		}

		$scope.getTreinador = function(id){
			for(i in $scope.treinadores){
				if($scope.treinadores[i].ID == id){
					return $scope.treinadores[i].display_name;
				}
			}

			return id;
		}

		dataService.getData({
			action : 'getColaborators'
		}).then(function(data){
			$scope.treinadores = data;
		});

	});

	module.controller('fichaUserController', function($scope, $rootScope, dataService, $routeParams) {

		dataService.getData({
			action : 'getUser',
			'user_id' : $routeParams.id
		}).then(function(data){
			$rootScope.user = data;
			if(!data.meta.treinador){
				$rootScope.user.meta.treinador = Array();
				//$scope.treinador = (parseInt(data.meta.treinador[0])) ? data.meta.treinador[0] : '0';
			}
		});

		$scope.saveUser = function(){
			dataService.getData({
				action : 'setUserMeta',
				user_id: $rootScope.user.ID,
				meta : angular.toJson($rootScope.user.meta)
			}).then(function(data){
				console.log(data);

				$rootScope.showInsertMessage = true;

				$rootScope.$onTimeout('sucessMsg', function(){
					$rootScope.showInsertMessage = false;
					$scope.$apply();
				}, 2000);
			});
		}

	});


	module.controller('listSubscribersController', function($scope, dataService) {

		dataService.getData({
			action : 'getColaboradorSubscribers'
		}).then(function(data){
			$scope.users = data;
		});

	});

	module.controller('listAllSubscribersController', function($scope, dataService) {

		dataService.getData({
			action : 'getSubscribers'
		}).then(function(data){
			$scope.users = data;
		});

		$scope.getInfo = function(user_id){
			var postData = {
				action : 'getUser',
				'user_id' : user_id
			};

			dataService.getData(postData).then(function(data){
				console.log(data);
			});
		}

	});