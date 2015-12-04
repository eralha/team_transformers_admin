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
	  }).when('/user-messages/:id', {
	  	controller: 'userMessagesController',
	  	templateUrl : window.pluginsDir+'/ng-templates/backend/user__messages.php'
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
		$scope.currentUserId = window.currentUserId;

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

		$scope.getUser = function(id){
			dataService.getData({
				action : 'getUser',
				'user_id' : id
			}).then(function(data){
				$scope.user = data;
				if(!data.meta.treinador){
					$scope.user.meta.treinador = Array();
					//$scope.treinador = (parseInt(data.meta.treinador[0])) ? data.meta.treinador[0] : '0';
				}
			});
		}

		dataService.getData({
			action : 'getColaborators'
		}).then(function(data){
			$scope.treinadores = data;
		});

	});

	module.controller('fichaUserController', function($scope, $rootScope, dataService, $routeParams) {

		$scope.getUser($routeParams.id);

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


	module.controller('userMessagesController', function($scope, dataService, $routeParams) {

		$scope.getUser($routeParams.id);
		$scope.mensagem = {};

		$scope._showForm = false;
		$scope.toggleForm = function(){
			$scope._showForm = ($scope._showForm) ? false : true;
		}

		$scope.enviarMensagem = function(){
			console.log($scope.mensagem);
		}

		dataService.getData({
			action : 'getUserMessages',
			user_id: $routeParams.id
		}).then(function(data){
			$scope.messages = data;
		});

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