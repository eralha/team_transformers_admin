<!-- LIST USER -->

<button type="button" class="btn btn-success" style="margin-top:15px;" ng-click="toggleForm()" ng-if="!_showForm">
  <span class="fa fa-envelope-o"></span> Nova Mensagem
</button>

<form class="team__content_container clearfix" ng-if="_showForm">

  <h3>
      <button type="button" class="btn btn-danger" ng-click="toggleForm()">
        <span class="fa fa-times"></span>
      </button> 
      <span>Nova mensagem para {{user.display_name}}</span>
  </h3>
  <div class="form-group">
    <label for="exampleInputEmail1">Assunto</label>
    <span ng-if="mensagem.iIDMenssagemResposta">[RE]: {{mensagem.vchAssunto}}</span>
    <input ng-if="!mensagem.iIDMenssagemResposta" type="text" class="form-control" id="exampleInputEmail1" placeholder="Assunto" ng-model="mensagem.vchAssunto" required>
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Mensagem</label>
    <textarea class="form-control" placeholder="Mensagem" style="height:150px" ng-model="mensagem.vchMensagem" required></textarea>
  </div>

  <button type="button" class="btn btn-success" ng-click="enviarMensagem()">Enviar</button>

</form>

<div class="list-group team__content_container" ng-if="!_showForm">

    <nav ng-if="pageTotal > 1">
      <ul class="pagination">
        <li>
          <a aria-label="Previous" ng-click="prevPage()">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li>
        <li ng-repeat="p in pages" ng-class="{active : p == (currentPage+1)}"><a ng-click="gotoPage(p)">{{p}}</a></li>
        <li>
          <a aria-label="Next" ng-click="nextPage()">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  
	  	<div class="list-group-item clearfix" ng-repeat="msg in messagesFiltered" ng-class="{'alert-success' : msg.iLida == 0 && msg.iUserId != currentUserId}">
        <button type="button" class="btn btn-primary pull-right" ng-click="replyTo(msg)">
          <span class="fa fa-pencil"></span>
        </button>
        <h4 class="list-group-item-heading">
            {{msg.vchRemetenteNome}}: 
            <span ng-if="msg.iIDMenssagemResposta != 0">[RE]: </span>{{msg.vchAssunto}}
        </h4>
        <p>{{msg.vchMensagem}}</p>
	  	</div>

    <nav ng-if="pageTotal > 1">
      <ul class="pagination">
        <li>
          <a aria-label="Previous" ng-click="prevPage()">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li>
        <li ng-repeat="p in pages" ng-class="{active : p == (currentPage+1)}"><a ng-click="gotoPage(p)">{{p}}</a></li>
        <li>
          <a aria-label="Next" ng-click="nextPage()">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
      
  	<div class="list-group-item" ng-if="messages.length == 0">
        <h4 class="list-group-item-heading">Não existem menssagens para este utilizador</h4>
  	 </div>

</div><!-- END LIST MESSAGES -->