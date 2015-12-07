

	module.controller('mainController', function($scope, dataService, $location) {

		$scope.isAdmin = window.isAdmin;
		$scope.currentUserId = window.currentUserId;
		$scope.msgs_to_read = 0;

		if($location.url() == ''){
			window.location = '#/account/';
		}

		$scope.$on('$routeChangeStart', function(next, current) { 
			$scope.url = $location.url()
		});

		$scope.checkUrl = function(url){
			return (String($scope.url).indexOf(url) != -1) ? true : false;
		}

		$scope.getMessagesToRead = function(){
			dataService.getData({
				action : 'getUserToReadMessages'
			}).then(function(data){
				$scope.msgs_to_read = data.msgs_to_read;
			});
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

		//Get logged user info
		//on frontend we only need to do this once
		$scope.getUser(window.currentUserId);

		//Get number of messages user has to read
		$scope.getMessagesToRead();

		jQuery('.angular-init').removeClass('angular-init');

	});

	module.controller('fichaUserController', function($scope, $rootScope, dataService, $routeParams) {

		$scope.saveUser = function(){
			var post = {
				action : 'updateUserData',
				user : angular.toJson($scope.user),
				new_password: ($scope.new_password != '' && $scope.new_password == $scope.confirma_new_password)? $scope.new_password : false
			};

			dataService.getData(post).then(function(data){
				console.log(data);

				//if data == 0 show error
				if(data == 0){
					$rootScope.showInsertError = true;
					$rootScope.$onTimeout('errorMsg', function(){
						$rootScope.showInsertError = false;
						$scope.$apply();
					}, 2000);
					return;
				}

				$rootScope.showInsertMessage = true;

				$rootScope.$onTimeout('sucessMsg', function(){
					$rootScope.showInsertMessage = false;
					$scope.$apply();
				}, 2000);
			});
		}

	});


	module.controller('inboxController', function($scope, dataService, $routeParams, $rootScope, $filter, $location) {

		$scope._showForm = false;

		var loc = $location.url();
		var getMessagesMeta = {};

		if(loc.indexOf('user-inbox') != -1){
			getMessagesMeta = {
				action : 'getUserMessages'
			}
		}
		if(loc.indexOf('user-outbox') != -1){
			getMessagesMeta = {
				action : 'getUserMessages',
				inbox  : true
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
				action : 'sendMessageToAdmin',
				message: angular.toJson($scope.mensagem)
			}).then(function(data){
				if(data == 1){
					$scope.mensagem = {};
					$scope.currentPage = 0;
					$scope.toggleForm();
					if(loc.indexOf('user-outbox') != -1){ $scope.getMessages(); }

					$rootScope.showInsertMessage = true;
					$rootScope.$onTimeout('errorMsg', function(){
						$rootScope.showInsertMessage = false;
						$scope.$apply();
					}, 2000);
				}
				if(data == 0){
					$rootScope.showInsertError = true;
					$rootScope.$onTimeout('errorMsg', function(){
						$rootScope.showInsertError = false;
						$scope.$apply();
					}, 2000);
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