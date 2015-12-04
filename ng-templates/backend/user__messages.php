<!-- LIST USER -->

<button type="button" class="btn btn-success" style="margin-top:15px;" ng-click="toggleForm()" ng-if="!_showForm">Nova Mensagem</button>

<form class="team__content_container clearfix" ng-if="_showForm">

  <h3><button type="button" class="btn btn-danger" ng-click="toggleForm()">Fechar</button> Nova mensagem para {{user.display_name}}</h3>
  <div class="form-group">
    <label for="exampleInputEmail1">Assunto</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Assunto">
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Mensagem</label>
    <textarea class="form-control" placeholder="Mensagem" style="height:150px"></textarea>
  </div>

  <button type="button" class="btn btn-success" ng-click="saveUser()">Enviar</button>

</form>

<div class="list-group team__content_container" ng-if="!_showForm">
  
	  	<div class="list-group-item" ng-repeat="msg in messages | filter: {iIDMenssagemResposta : 0}">
        <h4 class="list-group-item-heading">{{msg.vchAssunto}}</h4>
        <p>{{msg.vchMensagem}}</p>
	  	</div>
      
  	<div class="list-group-item" ng-if="msg.length == 0">
        <h4 class="list-group-item-heading">Não existem menssagens deste utilizador</h4>
  	 </div>

</div><!-- END LIST MESSAGES -->