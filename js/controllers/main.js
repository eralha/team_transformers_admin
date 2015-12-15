

	module.controller('mainController', function($scope, dataService, $location, $rootScope) {

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
					//$scope.user.meta.treinador = Array();
					//$scope.treinador = (parseInt(data.meta.treinador[0])) ? data.meta.treinador[0] : '0';
				}
			});
		}

		$scope.showMessage = function(message, messageContent, timer){
			$("html, body").stop().animate({scrollTop:0}, '300', 'swing');

			var time = timer || 2000;

			$rootScope[message] = true;
			$rootScope.$onTimeout(message, function(){
				$rootScope[message] = false;
				$scope.$apply();
			}, time);
		}

		dataService.getData({
			action : 'getColaborators'
		}).then(function(data){
			$scope.treinadores = data;
		});

		jQuery('.angular-init').removeClass('angular-init');

	});

	module.controller('fichaUserController', function($scope, $rootScope, dataService, $routeParams) {

		$scope.getUser($routeParams.id);

		$scope.saveUser = function(){

			dataService.getData({
				action : 'setUserMeta',
				user_id: $scope.user.ID,
				meta : angular.toJson($scope.user.meta)
			}).then(function(data){
				console.log(data);

				$scope.showMessage('showInsertMessage');
			});
		}

	});


	module.controller('inboxController', function($scope, dataService, $routeParams, $rootScope, $filter, $location) {

		$scope.getUser($routeParams.idCliente);
		$scope._showForm = false;

		var loc = $location.url();
		var getMessagesMeta = {};

		if(loc.indexOf('user-inbox') != -1){
			getMessagesMeta = {
				action : 'getUserInbox',
				sender_id: $routeParams.idCliente
			}
		}
		if(loc.indexOf('user-outbox') != -1){
			getMessagesMeta = {
				action : 'getUserOutbox',
				receiver_id: $routeParams.idCliente
			}
		}


		$scope.toggleForm = function(){
			$scope.mensagem = {};
			$scope._showForm = ($scope._showForm) ? false : true;
		}

		$scope.replyTo = function (msg){
			$scope.toggleForm();
			$scope.mensagem.iIDMenssagemResposta = (msg.iIDMenssagemResposta == 0)? msg.iIDMenssagem : msg.iIDMenssagemResposta;
			$scope.mensagem.vchAssunto = msg.vchAssunto;
		}

		$scope.enviarMensagem = function(){
			dataService.getData({
				action : 'sendMessageToUser',
				user_id: $routeParams.idCliente,
				message: angular.toJson($scope.mensagem)
			}).then(function(data){
				if(data == 1){
					$scope.mensagem = {};
					$scope.currentPage = 0;
					$scope.toggleForm();
					if(loc.indexOf('user-outbox') != -1){ $scope.getMessages(); }

					$scope.showMessage('showInsertMessage');
				}
				if(data == 0){
					$scope.showMessage('showInsertError');
				}
			});
		}

		$scope.getMessages = function (){
			dataService.getData(getMessagesMeta).then(function(data){
				$scope.messages = data;
				$scope.currentPage = 0;
				$scope.showPage();
				$scope.generatePages();
			});
		}
		$scope.getMessages();

		

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

