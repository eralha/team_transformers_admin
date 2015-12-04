<!-- LIST USER -->
<div class="list-group account-list-projs">

    <form class="team__content_container">
      <div class="form-group">
        <label for="exampleInputEmail1">Nome</label>
        <div class="form-control">{{user.display_name}}</div>
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <div class="form-control"><a href="mailto:{{user.user_email}}">{{user.user_email}}</a></div>
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Treinador</label>
        <div class="form-control" ng-if="!isAdmin">{{getTreinador(user.meta.treinador[0])}}</div>

        <select class="form-control" ng-model="user.meta.treinador[0]" ng-if="isAdmin">
          <option value="Não atribuido">Não atribuido</option>
          <option ng-repeat="treinador in treinadores" value="{{treinador.ID}}">{{treinador.display_name}}</option>
        </select>
      </div>

    </form>

    <button type="button" class="btn btn-success" ng-click="saveUser()">Guardar Alterações</button>

</div>
<!-- END LIST USER -->