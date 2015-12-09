<!-- LIST USER -->
<div class="list-group">

    <form name="registerForm" id="registerForm">
      <fieldset>
        <legend>Informação Pessoal</legend>
        <div class="form-group">
          <label for="first_name">Primeiro Nome: </label>
          <input type="text" class="form-control" name="first_name" id="first_name" placeholder="O seu primeiro Nome" required/>
        </div>
        <div class="form-group">
          <label for="last_name">Apelido: </label>
          <input type="text" class="form-control" name="last_name" id="last_name" placeholder="O seu ultimo Nome" required/>
        </div>
        <div class="form-group">
          <label for="nickname">Nickname(<small>Nome que os outros utilizadores irão ver.</small>): </label>
          <input type="text" class="form-control" name="nickname" id="nickname" placeholder="Nome Que os outros utilizadores vão ver" required/>
        </div>
        <div class="form-group">
          <label for="user_email">Email: </label>
          <input type="text" class="form-control" name="user_email" id="user_email" placeholder="O seu email" required/>
        </div>
        <div class="form-group">
          <label for="adress">Morada: </label>
          <input type="text" class="form-control" name="adress" id="adress" placeholder="Morada" required/>
        </div>
        <div class="form-group">
          <label for="localidade">Localidade: </label>
          <input type="text" class="form-control" name="localidade" id="localidade" placeholder="Localidade" required/>
        </div>
        <div class="form-group">
          <label for="codPostal">Código Postal: </label>
          <input type="text" class="form-control" name="codPostal" id="codPostal" placeholder="Código postal" required/>
        </div>
      </fieldset>
      <fieldset>
        <legend>Informação de Login</legend>
        <div class="form-group">
          <label for="user_login_register">Username: </label>
          <input type="text" class="form-control" name="user_login_register" id="user_login_register" required/>
        </div>
        <div class="form-group">
          <label for="user_pass_register">Password: </label>
          <input type="password" class="form-control" name="user_pass_register" id="user_pass_register" required/>
        </div>
      </fieldset>
      <input type="submit" name="wp-submit-register" id="wp-submit-register" class="btn btn-default" value="Registar" tabindex="100" />
    </form>

    <button type="button" class="btn btn-success" ng-click="saveUser()">Guardar Alterações</button>

</div>
<!-- END LIST USER -->