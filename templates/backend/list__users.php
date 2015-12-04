<?php
	function handlerMinorErrors(){
	}
	set_error_handler('handlerMinorErrors', E_NOTICE | E_STRICT);

	$postData = $_POST["postData"];
?>
<!-- REGISTER FORM -->
	
	<div class="bootcards-list">
	  <div class="panel panel-default">

	  	<!-- LIST USER -->
	    <div class="list-group account-list-projs" ng-controller="listSubscribersController">
		  
	  	  	<div class="list-group-item" ng-repeat="user in users">
	  	  		<button type="button" class="btn btn-primary pull-right" ng-click="getInfo(user.ID)">Ver ficha</button>
		        <h4 class="list-group-item-heading">{{user.display_name}}</h4>
		        <p class="list-group-item-text">
		        	<span><b>Treinador:</b> {{user.treinador[0]}}</span>
		        </p>
	  	  	</div>
		      
		  	<div class="list-group-item" ng-if="users.length == 0">
		        <h4 class="list-group-item-heading">Não existe nenhum cliente atribuido a si!</h4>
		  	 </div>

	    </div>
	    <!-- END LIST USER -->

	  </div>
	</div>

<!-- END REGISTER FORM -->