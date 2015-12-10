<!-- LIST USER -->
<div class="list-group">

    <form class="team__content_container">

      <div class="form-group">
        <label for="exampleInputEmail1">Username</label>
        <input type="text" class="form-control" ng-model="login.user_login" />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Password</label>
        <input type="password" class="form-control" ng-model="login.user_password" />
      </div>

      <p>Se anda não tem uma conta <a href="#/user-register">clique aqui para registar</a>.</p>
      <p><a href="">Recuperar password</a></p>

    </form>

    <button type="button" class="btn btn-success" ng-click="logInUser()">Entrar</button>

</div>
<!-- END LIST USER -->