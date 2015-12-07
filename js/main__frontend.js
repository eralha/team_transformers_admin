var module = angular.module('appModule', ['ngRoute']);

	module.config(function($routeProvider, $locationProvider) {
	  $routeProvider
	  

	  .when('/account/', {
	  	controller: 'fichaUserController',
	  	templateUrl : window.pluginsDir+'/ng-templates/frontend/ficha__user.php'
	  })

	  .when('/user-inbox/', {
	  	controller: 'inboxController',
	  	templateUrl : window.pluginsDir+'/ng-templates/frontend/user__messages.php'
	  })
	  .when('/user-outbox/', {
	  	controller: 'inboxController',
	  	templateUrl : window.pluginsDir+'/ng-templates/frontend/user__messages.php'
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

        $provide.decorator('$rootScope', ['$delegate', function($delegate){
            Object.defineProperty($delegate.constructor.prototype, '$onInterval', {
                value: function(name, handler, timer){

                	if($delegate[name + 'TimerId']){
						clearInterval($delegate[name + 'TimerId']);
					}
                    $delegate[name + 'TimerId'] = setInterval(function(){
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

	module.filter('startFrom', function() {
	    return function(input, start) {
	        start = +start; //parse to int
	        if(!input){ return; }
	        return input.slice(start);
	    }
	});