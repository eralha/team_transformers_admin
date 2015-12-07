

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
        <button type="button" class="btn btn-primary pull-right" ng-click="replyTo(msg)" ng-if="checkUrl('/user-inbox/')">
          <span class="fa fa-pencil"></span>
        </button>
        <h4 class="list-group-item-heading">
            {{msg.vchSenderName}}: 
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
        <h4 class="list-group-item-heading">Não existem mensagens</h4>
    </div>