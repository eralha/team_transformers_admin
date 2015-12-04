
<div ng-controller="mainController">
	<?php if(isset($_POST["is_admin"])){ ?>
		<ul class="nav nav-tabs" style="margin-bottom:20px;">
		  <li role="presentation" ng-class="{active : url == '/all-users/'}"><a href="?page=team-screen#/all-users/">Todos os clientes</a></li>
		  <li role="presentation" ng-class="{active : url == '/my-users/'}"><a href="?page=team-screen#/my-users/">Os meus clientes</a></li>
		  <li role="presentation" ng-class="{active : url == '/my-messages/'}"><a href="?page=team-screen#/my-messages/">Mensagens</a></li>
		</ul>
	<?php } else { ?>
		<ul class="nav nav-tabs" style="margin-bottom:20px;">
		  <li role="presentation" ng-class="{active : url == '/my-users/'}"><a href="?page=team-screen#/my-users/">Os meus clientes</a></li>
		  <li role="presentation" ng-class="{active : url == '/my-messages/'}"><a href="?page=team-screen#/my-messages/">Mensagens</a></li>
		</ul>
	<?php }?>


	<div class="alert alert-success" role="alert" ng-if="showInsertMessage">Registo Guardado</div>


	<ul class="nav nav-pills" ng-if="checkUrl('/user')">
      <li role="presentation" ng-class="{active : checkUrl('/user/')}"><a href="#/user/{{user.ID}}">Ficha</a></li>
      <li role="presentation" ng-class="{active : checkUrl('/user-messages/')}"><a href="#/user-messages/{{user.ID}}">Mensagens</a></li>
      <li role="presentation" ng-class="{active : checkUrl('/user-relatorio/')}"><a href="#/user-relatorio/{{user.ID}}">Relatorio</a></li>
    </ul>


	<ng-view></ng-view>
</div>