<div ng-app='appModule' class="angular-init">
	<div ng-controller="mainController">

		<ul class="nav nav-tabs" style="margin-bottom:20px;" ng-if="currentUserId">
		  <li role="presentation" ng-class="{active : checkUrl('/account/')}"><a href="#/account/">Informação Pessoal</a></li>
		  <li role="presentation" ng-class="{active : checkUrl('/user-inbox/') || checkUrl('/user-outbox/')}"><a href="#/user-inbox/">
		  	Mensagens <span class="badge" ng-show="msgs_to_read != 0">{{msgs_to_read}}</span>
		  </a></li>
		  <li role="presentation"><a href="#{{url}}" ng-click="logout()">
		  	Sair <span class="fa fa-sign-out"></span>
		  </a></li>
		</ul>

		<div id="notifyZone"></div>

		<div class="alert alert-success" role="alert" ng-if="showInsertMessage">Registo Guardado</div>

		<div class="alert alert-danger" role="alert" ng-if="showInsertError">Ocorreu um erro!</div>


		<ng-view></ng-view>
	</div>
</div>