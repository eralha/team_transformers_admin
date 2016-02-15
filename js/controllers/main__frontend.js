

	module.controller('mainController', function($scope, dataService, $location, routeConfig, $rootScope) {

		$scope.currentUserId = window.currentUserId;
		$scope.msgs_to_read = 0;

		

		$scope.$on('$routeChangeComplete', function(next, current) { 
			$scope.parseLocation();
		});
		$scope.$on('$routeChangeStart', function(next, current) { 
			$scope.parseLocation();
		});

		function isRequiredLogin(url){
			for (i in routeConfig){
		    	if(routeConfig[i].path == url && routeConfig[i].requireLogin) { return true; }
		    }
		    return false;
		}

		$scope.parseLocation = function(){
			$scope.url = $location.url();

			if(isRequiredLogin($scope.url) == false && $scope.currentUserId){
				window.location = '#/account/';
				return;
			}
			if(!$scope.currentUserId && isRequiredLogin($scope.url) || $scope.url == ''){
				window.location = '#/user-login/';
			}
		}
		$scope.parseLocation();

		$scope.checkUrl = function(url){
			return (String($scope.url).indexOf(url) != -1) ? true : false;
		}

		$scope.redirectToRoot = function(){
			var loc = window.location;
				loc = String(loc).slice(0, String(loc).indexOf('#'));
			window.location = loc;
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
					//$scope.user.meta.treinador = Array();
					//$scope.treinador = (parseInt(data.meta.treinador[0])) ? data.meta.treinador[0] : '0';
				}
			});
		}

		$scope.logout = function(){
			dataService.getData({
				action : 'userLogout'
			}).then(function(data){
				if(data == true){
					$scope.redirectToRoot();
				}
			});
		}

		$scope.initLoggedInUser = function(){
			//Get logged user info
			//on frontend we only need to do this once
			$scope.getUser($scope.currentUserId);

			//Get number of messages user has to read
			$scope.getMessagesToRead();
		}

		$scope.showMessage = function(message, messageContent, timer){
			$("html, body").stop().animate({scrollTop: $('#notifyZone').offset().top - 100}, '300', 'swing');

			var time = timer || 2000;

			$rootScope[message] = true;
			$rootScope.$onTimeout(message, function(){
				$rootScope[message] = false;
				$scope.$apply();
			}, time);
		}

		if($scope.currentUserId){
			$scope.initLoggedInUser();
		}

		jQuery('.angular-init').removeClass('angular-init');

	});

	module.controller('loginController', function($scope, $rootScope, dataService, $routeParams) {

		$scope.login = {};

		$scope.logInUser = function(){
			dataService.getData({
				action : 'userLogin',
				data : $scope.login
			}).then(function(data){

				//if data == 0 show error
				if(data == 0){
					$scope.showMessage('showInsertError');
					return;
				}

				if(data.loggedin == true){
					$scope.redirectToRoot();
				}
			});
		}

	});

	module.controller('registerController', function($scope, $rootScope, dataService, $routeParams) {

		$scope.login = {};
		$scope.formErrors = {};

		$scope.registerUser = function(){

			$scope.registerSuccess = false;

			if(Object.keys($scope.formErrors).length > 0){
				//scroll to error message
				$("html, body").stop().animate({scrollTop: $('#registerForm').offset().top - 100}, '300', 'swing');
				$scope.showFormError = true;

				return;
			}else{
				$scope.showFormError = false;
			}

			dataService.getData({
				action : 'userRegister',
				data : $scope.registo
			}).then(function(data){

				//if data == 0 show error
				if(data.errors){
					$rootScope.errors = data.errors;
					$scope.showMessage('showFormError', '', 5000);
					return;
				}

				if(data.userID){
					$("html, body").stop().animate({scrollTop: $('#registerForm').offset().top - 100}, '300', 'swing');

					$scope.registerSuccess = true;
					return;
				}
				
			});
		}

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
					$scope.showMessage('showInsertError');
					return;
				}

				$rootScope.showInsertMessage = true;

				$scope.showMessage('showInsertMessage');
			});
		}

	});


	module.controller('inboxController', function($scope, dataService, $routeParams, $rootScope, $filter, $location) {

		$scope._showForm = false;

		var loc = $location.url();
		var getMessagesMeta = {};

		//Aqui estamos no inbox, vemos as recebidas
		if(loc.indexOf('user-inbox') != -1){
			getMessagesMeta = {
				action : 'getUserMessages',
				inbox  : true
			}
		}
		//Aqui estamos no out box, vemos as msgs enviadas pelo user
		if(loc.indexOf('user-outbox') != -1){
			getMessagesMeta = {
				action : 'getUserMessages'
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