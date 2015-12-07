<!-- LIST USER -->

<!-- TOPO NAVIGATION -->
<button type="button" class="btn btn-success" style="margin-top:15px;" ng-click="toggleForm()">
  <span class="fa fa-envelope-o"></span> Nova Mensagem
</button>
<a href="#/user-inbox/"><button type="button" class="btn btn-success" style="margin-top:15px;" ng-class="{active : checkUrl('/user-inbox/')}">
  <span class="fa fa-inbox"></span> Recebidas <span class="badge" ng-if="msgs_to_read != 0">{{msgs_to_read}}</span>
</button></a>
<a href="#/user-outbox/"><button type="button" class="btn btn-success" style="margin-top:15px;" ng-class="{active : checkUrl('/user-outbox/')}">
  <span class="fa fa-sign-out"></span> Enviadas
</button></a>
<!-- END TOPO NAVIGATION -->

<form class="team__content_container clearfix" ng-show="_showForm">

  <h3>
      <button type="button" class="btn btn-danger" ng-click="toggleForm()">
        <span class="fa fa-times"></span>
      </button> 
      <span>Nova mensagem</span>
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

<div class="list-group team__content_container" ng-show="!_showForm" messages-list></div>
<!-- END LIST MESSAGES -->