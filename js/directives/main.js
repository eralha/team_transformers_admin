	

	module.directive('messagesList', function($rootScope, dataService, $routeParams, $filter) {
      return {
        restrict: 'EA',
        templateUrl: window.pluginsDir+'/ng-templates/directives/messages__list.php',
        link: function(scope, elem, attrs) {

        	$scope = scope;

        	$scope.currentPage = 0;
    		$scope.pageSize = 10;
	    	$scope.messages = [];
			$scope.mensagem = {};

        	$scope.nextPage = function(){
		    	if($scope.currentPage >= $scope.messages.length / $scope.pageSize - 1) { return; }
		    	$scope.currentPage ++;
		    	$scope.showPage();
		    }

		    $scope.prevPage = function(){
		    	if($scope.currentPage == 0) { return; }
		    	$scope.currentPage --;
		    	$scope.showPage();
		    }

		    $scope.generatePages = function(){
		    	$scope.pages = Array();
		    	for(var i=0; i < $scope.pageTotal; i++){
		    		$scope.pages.push(i+1);
		    	}
		    }

		    $scope.gotoPage = function(page){
		    	$scope.currentPage = page -1;
		    	$scope.showPage();
		    }

		    $scope.showPage = function(){
		    	$scope.startFrom = $scope.currentPage*$scope.pageSize;
		    	$scope.pageTotal = Math.ceil($scope.messages.length/$scope.pageSize);

		    	$scope.messagesFiltered = $filter('startFrom')($scope.messages, ($scope.startFrom));
		    	$scope.messagesFiltered = $filter('limitTo')($scope.messagesFiltered, ($scope.pageSize));

		    	//check if there is some message to read and if so change its satate on the server
		    	var msgsToUpdate = Array();
		    	angular.forEach($scope.messagesFiltered, function(value, key) {
				  if(value.iLida == 0){
				  	this.push(value.iIDMenssagem);
				  }
				}, msgsToUpdate);

				//if no messages to update do nothing
				if(msgsToUpdate.length == 0){ return; }

				$rootScope.$onTimeout('changeMessageStatus', function(){
					dataService.getData({
						action : 'updateMessageState',
						msgs: angular.toJson(msgsToUpdate)
					}).then(function(data){
						//we have changed values so update our list
						if(data >= 1){
							if($scope.getMessagesToRead){
								$scope.getMessagesToRead();
							}else{
								$scope.getUser($scope.user.ID);
							}

							//update current messages state to readed
							for(i in $scope.messages){
								if(msgsToUpdate.indexOf($scope.messages[i].iIDMenssagem) != -1){
								  	$scope.messages[i].iLida = 1;
								  }
							}
						}
					});
				}, 2000);
		    }
            
        }
      };
    });