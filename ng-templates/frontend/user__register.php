<!-- LIST USER -->
<div class="list-group">


    <div class="alert alert-success" role="alert" ng-if="registerSuccess">
      <b>O Registo foi criado com successo</b> utilize os seus dados para entrar no website.<br />
      <a href="#/user-login/">
        <button type="button" class="btn btn-success" style="margin-top:10px;">Fazer login</button>
      </a>
    </div>

    <form name="registerForm" id="registerForm" ng-show="!registerSuccess">

      <div class="alert alert-danger" role="alert" ng-if="showFormError">
        <b>Verifique os seguintes campos</b>
        <!-- ERROS PARSED FROM WP -->
        <div ng-if="errors.existing_user_login">- O username que escolheu já existe</div>
        <div ng-if="errors.existing_user_email">- O email que escolheu já existe</div>
        <div ng-if="errors.empty_user_login">- Username precisa de ser preenchido</div>

        <div ng-repeat="error in formErrors">
          <div ng-repeat="e in error">- {{e}}</div>
        </div>
      </div>

      <fieldset>
        <legend>Informação Pessoal</legend>
        <div class="form-group" ng-class="{'has-error': formErrors.first_name}">
          <label for="first_name" class="control-label">Primeiro Nome: </label>
          <input type="text" class="form-control" name="first_name" id="first_name" placeholder="O seu primeiro Nome" ng-model="registo.first_name" error-msg="formErrors" field-validator="required"/>
        </div>
        <div class="form-group" ng-class="{'has-error': formErrors.last_name}">
          <label for="last_name" class="control-label">Apelido: </label>
          <input type="text" class="form-control" name="last_name" id="last_name" placeholder="O seu ultimo Nome" ng-model="registo.last_name" error-msg="formErrors" field-validator="required"/>
        </div>
        <div class="form-group" ng-class="{'has-error': formErrors.nickname}">
          <label for="nickname" class="control-label">Nickname: </label>
          <input type="text" class="form-control" name="nickname" id="nickname" placeholder="Nome Que os outros utilizadores vão ver" ng-model="registo.nickname" error-msg="formErrors" field-validator="required"/>
        </div>
        <div class="form-group" ng-class="{'has-error': formErrors.user_email}">
          <label for="user_email" class="control-label">Email: </label>
          <input type="text" class="form-control" name="user_email" id="user_email" placeholder="O seu email" ng-model="registo.user_email" error-msg="formErrors" field-validator="required,email"/>
        </div>
        <div class="form-group" ng-class="{'has-error': formErrors.adress}">
          <label for="adress" class="control-label">Morada: </label>
          <input type="text" class="form-control" name="adress" id="adress" placeholder="Morada" ng-model="registo.adress" error-msg="formErrors" field-validator="required"/>
        </div>
        <div class="form-group" ng-class="{'has-error': formErrors.localidade}">
          <label for="localidade" class="control-label">Localidade: </label>
          <input type="text" class="form-control" name="localidade" id="localidade" placeholder="Localidade" ng-model="registo.localidade" error-msg="formErrors" field-validator="required"/>
        </div>
        <div class="form-group" ng-class="{'has-error': formErrors.codPostal}">
          <label for="codPostal" class="control-label">Código Postal: </label>
          <input type="text" class="form-control" name="codPostal" id="codPostal" placeholder="Código postal" ng-model="registo.codPostal" error-msg="formErrors" field-validator="required"/>
        </div>
      </fieldset>
      <fieldset>
        <legend>Informação de Login</legend>
        <div class="form-group" ng-class="{'has-error': formErrors.user_login_register}">
          <label for="user_login_register" class="control-label">Username: </label>
          <input type="text" class="form-control" name="user_login_register" id="user_login_register" ng-model="registo.user_login" error-msg="formErrors" field-validator="required"/>
        </div>
        <div class="form-group" ng-class="{'has-error': formErrors.user_pass_register}">
          <label for="user_pass_register" class="control-label">Password: </label>
          <input type="password" class="form-control" name="user_pass_register" id="user_pass_register" ng-model="registo.user_pass" error-msg="formErrors" field-validator="required"/>
        </div>
      </fieldset>

      <button type="button" class="btn btn-success" ng-click="registerUser()">Enviar Registo</button>
    </form>


</div>
<!-- END LIST USER -->