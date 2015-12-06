<!-- LIST USER -->
<div class="list-group account-list-projs team__content_container">
  
	  	<div class="list-group-item" ng-repeat="user in users">
        <div class="pull-right">
  	  		<a type="button" class="btn btn-primary" href="#/user/{{user.ID}}">Ver ficha</a>
          <a type="button" class="btn btn-primary" href="#/user-messages/{{user.ID}}">
            Mensagens <span class="badge" ng-if="user.msgs_to_read != 0">{{user.msgs_to_read}}</span>
          </a>
        </div>
        <h4 class="list-group-item-heading">{{user.display_name}}</h4>
        <p class="list-group-item-text">
        	<span><b>Treinador:</b> {{getTreinador(user.treinador[0])}}</span>
        </p>
	  	</div>
      
  	<div class="list-group-item" ng-if="users.length == 0">
        <h4 class="list-group-item-heading">Não existe nenhum cliente atribuido a si!</h4>
  	 </div>

</div>
<!-- END LIST USER -->