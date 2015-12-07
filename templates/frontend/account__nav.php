<div ng-app='appModule' class="angular-init">
	<div ng-controller="mainController">
		<ul class="nav nav-tabs" style="margin-bottom:20px;">
		  <li role="presentation" ng-class="{active : checkUrl('/account/')}"><a href="#/account/">Informação Pessoal</a></li>
		  <li role="presentation" ng-class="{active : checkUrl('/user-inbox/') || checkUrl('/user-outbox/')}"><a href="#/user-inbox/">
		  	Mensagens <span class="badge" ng-if="msgs_to_read != 0">{{msgs_to_read}}</span>
		  </a></li>
		</ul>

		<div class="alert alert-success" role="alert" ng-if="showInsertMessage">Registo Guardado</div>

		<div class="alert alert-danger" role="alert" ng-if="showInsertError">Ocorreu um erro!</div>


		<ng-view></ng-view>
	</div>
</div>