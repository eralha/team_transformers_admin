<!-- LIST USER -->
<div class="list-group account-list-projs">

    <form class="team__content_container">
      <div class="form-group">
        <label for="exampleInputEmail1">Nome</label>
        <input type="text" class="form-control" ng-model="user.display_name" />
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input type="text" class="form-control" ng-model="user.user_email" />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Password <small>(preencher apenas se pretender alterar)</small></label>
        <input type="password" class="form-control" ng-model="new_password" />
      </div>
      <div class="form-group" ng-show="new_password">
        <label for="exampleInputEmail1">Confirmar Password</label>
        <input type="password" class="form-control" ng-model="confirma_new_password" />
      </div>

    </form>

    <button type="button" class="btn btn-success" ng-click="saveUser()">Guardar Alterações</button>

</div>
<!-- END LIST USER -->