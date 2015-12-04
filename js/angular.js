/*
 AngularJS v1.5.0-beta.2
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(R,X,u){'use strict';function I(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.5.0-beta.2/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function Ba(a){if(null==a||Xa(a))return!1;if(K(a)||J(a)||A&&a instanceof
A)return!0;var b="length"in Object(a)&&a.length;return U(b)&&(0<=b&&b-1 in a||"function"==typeof a.item)}function n(a,b,d){var c,e;if(a)if(C(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(K(a)||Ba(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==n)a.forEach(b,d,a);else if(nc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)ua.call(a,c)&&b.call(d,a[c],c,a);return a}function oc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function pc(a){return function(b,d){a(d,b)}}function Vd(){return++ob}function Nb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(F(g)||C(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],s=g[m];d&&F(s)?fa(s)?a[m]=new Date(s.valueOf()):Na(s)?a[m]=new RegExp(s):s.nodeName?a[m]=s.cloneNode(!0):
Ob(s)?a[m]=s.clone():(F(a[m])||(a[m]=K(s)?[]:{}),Nb(a[m],[s],!0)):a[m]=s}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function P(a){return Nb(a,va.call(arguments,1),!1)}function Wd(a){return Nb(a,va.call(arguments,1),!0)}function ba(a){return parseInt(a,10)}function Pb(a,b){return P(Object.create(a),b)}function v(){}function Ya(a){return a}function ca(a){return function(){return a}}function qc(a){return C(a.toString)&&a.toString!==wa}function x(a){return"undefined"===typeof a}function y(a){return"undefined"!==
typeof a}function F(a){return null!==a&&"object"===typeof a}function nc(a){return null!==a&&"object"===typeof a&&!rc(a)}function J(a){return"string"===typeof a}function U(a){return"number"===typeof a}function fa(a){return"[object Date]"===wa.call(a)}function C(a){return"function"===typeof a}function Na(a){return"[object RegExp]"===wa.call(a)}function Xa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function $a(a){return"boolean"===typeof a}function sc(a){return a&&U(a.length)&&
Xd.test(wa.call(a))}function Ob(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function Yd(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function pa(a){return N(a.nodeName||a[0]&&a[0].nodeName)}function ab(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function bb(a,b){function d(a,b){var d=b.$$hashKey,e;if(K(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(nc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)ua.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!F(a))return a;var b=e.indexOf(a);if(-1!==b)return f[b];if(Xa(a)||Za(a))throw Ca("cpws");var b=!1,c;K(a)?(c=[],b=!0):sc(a)?c=new a.constructor(a):fa(a)?c=new Date(a.getTime()):Na(a)?(c=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),c.lastIndex=a.lastIndex):C(a.cloneNode)?c=a.cloneNode(!0):(c=Object.create(rc(a)),b=!0);e.push(a);f.push(c);return b?d(a,c):c}var e=[],f=[];if(b){if(sc(b))throw Ca("cpta");
if(a===b)throw Ca("cpi");K(b)?b.length=0:n(b,function(a,c){"$$hashKey"!==c&&delete b[c]});e.push(a);f.push(b);return d(a,b)}return c(a)}function da(a,b){if(K(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(F(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function la(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d==typeof b&&"object"==d)if(K(a)){if(!K(b))return!1;if((d=a.length)==b.length){for(c=
0;c<d;c++)if(!la(a[c],b[c]))return!1;return!0}}else{if(fa(a))return fa(b)?la(a.getTime(),b.getTime()):!1;if(Na(a))return Na(b)?a.toString()==b.toString():!1;if(Za(a)||Za(b)||Xa(a)||Xa(b)||K(b)||fa(b)||Na(b))return!1;d=V();for(c in a)if("$"!==c.charAt(0)&&!C(a[c])){if(!la(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&y(b[c])&&!C(b[c]))return!1;return!0}return!1}function cb(a,b,d){return a.concat(va.call(b,d))}function tc(a,b){var d=2<arguments.length?va.call(arguments,2):
[];return!C(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,cb(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Zd(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=u:Xa(b)?d="$WINDOW":b&&X===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function db(a,b){if("undefined"===typeof a)return u;U(b)||(b=b?2:null);return JSON.stringify(a,Zd,b)}function uc(a){return J(a)?JSON.parse(a):a}function vc(a,
b){var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Qb(a,b,d){d=d?-1:1;var c=vc(b,a.getTimezoneOffset());b=a;a=d*(c-a.getTimezoneOffset());b=new Date(b.getTime());b.setMinutes(b.getMinutes()+a);return b}function qa(a){a=A(a).clone();try{a.empty()}catch(b){}var d=A("<div>").append(a).html();try{return a[0].nodeType===Oa?N(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+N(b)})}catch(c){return N(d)}}function wc(a){try{return decodeURIComponent(a)}catch(b){}}
function xc(a){var b={};n((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=wc(e),y(e)&&(f=y(f)?wc(f):!0,ua.call(b,e)?K(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Rb(a){var b=[];n(a,function(a,c){K(a)?n(a,function(a){b.push(ma(c,!0)+(!0===a?"":"="+ma(a,!0)))}):b.push(ma(c,!0)+(!0===a?"":"="+ma(a,!0)))});return b.length?b.join("&"):""}function pb(a){return ma(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,
"=").replace(/%2B/gi,"+")}function ma(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function $d(a,b){var d,c,e=Pa.length;for(c=0;c<e;++c)if(d=Pa[c]+b,J(d=a.getAttribute(d)))return d;return null}function ae(a,b){var d,c,e={};n(Pa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});n(Pa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":",
"\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==$d(d,"strict-di"),b(d,c?[c]:[],e))}function yc(a,b,d){F(d)||(d={});d=P({strictDi:!1},d);var c=function(){a=A(a);if(a.injector()){var c=a[0]===X?"document":qa(a);throw Ca("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=eb(b,d.strictDi);c.invoke(["$rootScope",
"$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;R&&e.test(R.name)&&(d.debugInfoEnabled=!0,R.name=R.name.replace(e,""));if(R&&!f.test(R.name))return c();R.name=R.name.replace(f,"");ga.resumeBootstrap=function(a){n(a,function(a){b.push(a)});return c()};C(ga.resumeDeferredBootstrap)&&ga.resumeDeferredBootstrap()}function be(){R.name="NG_ENABLE_DEBUG_INFO!"+R.name;R.location.reload()}
function ce(a){a=ga.element(a).injector();if(!a)throw Ca("test");return a.get("$$testability")}function zc(a,b){b=b||"_";return a.replace(de,function(a,c){return(c?b:"")+a.toLowerCase()})}function ee(){var a;if(!Ac){var b=qb();(xa=x(b)?R.jQuery:b?R[b]:u)&&xa.fn.on?(A=xa,P(xa.fn,{scope:Qa.scope,isolateScope:Qa.isolateScope,controller:Qa.controller,injector:Qa.injector,inheritedData:Qa.inheritedData}),a=xa.cleanData,xa.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=xa._data(f,"events"))&&
c.$destroy&&xa(f).triggerHandler("$destroy");a(b)}):A=D;ga.element=A;Ac=!0}}function rb(a,b,d){if(!a)throw Ca("areq",b||"?",d||"required");return a}function Ra(a,b,d){d&&K(a)&&(a=a[a.length-1]);rb(C(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Sa(a,b){if("hasOwnProperty"===a)throw Ca("badname",b);}function Bc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&C(a)?tc(e,a):a}function sb(a){for(var b=
a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=A(va.call(a,0,e))),c.push(b);return c||a}function V(){return Object.create(null)}function fe(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=I("$injector"),c=I("ng"),e=b(a,"angular",Object);e.$$minErr=e.$$minErr||I;return b(e,"module",function(){var a={};return function(g,h,k){if("hasOwnProperty"===g)throw c("badname","module");h&&a.hasOwnProperty(g)&&(a[g]=null);return b(a,g,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||
"push"]([b,d,arguments]);return t}}function b(a,d){return function(b,e){e&&C(e)&&(e.$$moduleName=g);c.push([a,d,arguments]);return t}}if(!h)throw d("nomod",g);var c=[],f=[],B=[],Q=a("$injector","invoke","push",f),t={_invokeQueue:c,_configBlocks:f,_runBlocks:B,requires:h,name:g,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider",
"register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:function(a,b){function c(d){function f(a){return e.isFunction(a)?function(b,c){return d.invoke(a,this,{$element:b,$attrs:c})}:a}var g=b.template||b.templateUrl?b.template:"";return{controller:b.controller||function(){},controllerAs:Cc(b.controller)||b.controllerAs||a,template:f(g),templateUrl:f(b.templateUrl),transclude:b.transclude===u?!0:b.transclude,
scope:!1===b.isolate?!0:{},bindToController:b.bindings||{},restrict:b.restrict||"E"}}b.$canActivate&&(c.$canActivate=b.$canActivate);b.$routeConfig&&(c.$routeConfig=b.$routeConfig);c.$inject=["$injector"];return t.directive(a,c)},config:Q,run:function(a){B.push(a);return this}};k&&Q(k);return t})}})}function ge(a){P(a,{bootstrap:yc,copy:bb,extend:P,merge:Wd,equals:la,element:A,forEach:n,injector:eb,noop:v,bind:tc,toJson:db,fromJson:uc,identity:Ya,isUndefined:x,isDefined:y,isString:J,isFunction:C,
isObject:F,isNumber:U,isElement:Ob,isArray:K,version:he,isDate:fa,lowercase:N,uppercase:tb,callbacks:{counter:0},getTestability:ce,$$minErr:I,$$csp:Da,reloadWithDebugInfo:be});Sb=fe(R);Sb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ie});a.provider("$compile",Dc).directive({a:je,input:Ec,textarea:Ec,form:ke,script:le,select:me,style:ne,option:oe,ngBind:pe,ngBindHtml:qe,ngBindTemplate:re,ngClass:se,ngClassEven:te,ngClassOdd:ue,ngCloak:ve,ngController:we,ngForm:xe,ngHide:ye,ngIf:ze,
ngInclude:Ae,ngInit:Be,ngNonBindable:Ce,ngPluralize:De,ngRepeat:Ee,ngShow:Fe,ngStyle:Ge,ngSwitch:He,ngSwitchWhen:Ie,ngSwitchDefault:Je,ngOptions:Ke,ngTransclude:Le,ngModel:Me,ngList:Ne,ngChange:Oe,pattern:Fc,ngPattern:Fc,required:Gc,ngRequired:Gc,minlength:Hc,ngMinlength:Hc,maxlength:Ic,ngMaxlength:Ic,ngValue:Pe,ngModelOptions:Qe}).directive({ngInclude:Re}).directive(ub).directive(Jc);a.provider({$anchorScroll:Se,$animate:Te,$animateCss:Ue,$$animateQueue:Ve,$$AnimateRunner:We,$browser:Xe,$cacheFactory:Ye,
$controller:Ze,$document:$e,$exceptionHandler:af,$filter:Kc,$$forceReflow:bf,$interpolate:cf,$interval:df,$http:ef,$httpParamSerializer:ff,$httpParamSerializerJQLike:gf,$httpBackend:hf,$xhrFactory:jf,$location:kf,$log:lf,$parse:mf,$rootScope:nf,$q:of,$$q:pf,$sce:qf,$sceDelegate:rf,$sniffer:sf,$templateCache:tf,$templateRequest:uf,$$testability:vf,$timeout:wf,$window:xf,$$rAF:yf,$$jqLite:zf,$$HashMap:Af,$$cookieReader:Bf})}])}function fb(a){return a.replace(Cf,function(a,d,c,e){return e?c.toUpperCase():
c}).replace(Df,"Moz$1")}function Lc(a){a=a.nodeType;return 1===a||!a||9===a}function Mc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Tb.test(a)){d=d||e.appendChild(b.createElement("div"));c=(Ef.exec(a)||["",""])[1].toLowerCase();c=ia[c]||ia._default;d.innerHTML=c[1]+a.replace(Ff,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=cb(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";n(f,function(a){e.appendChild(a)});return e}function D(a){if(a instanceof
D)return a;var b;J(a)&&(a=W(a),b=!0);if(!(this instanceof D)){if(b&&"<"!=a.charAt(0))throw Ub("nosel");return new D(a)}if(b){b=X;var d;a=(d=Gf.exec(a))?[b.createElement(d[1])]:(d=Mc(a,b))?d.childNodes:[]}Nc(this,a)}function Vb(a){return a.cloneNode(!0)}function vb(a,b){b||gb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)gb(d[c])}function Oc(a,b,d,c){if(y(c))throw Ub("offargs");var e=(c=wb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];y(d)&&
ab(c||[],d);y(d)&&c&&0<c.length||(a.removeEventListener(b,f,!1),delete e[b])};n(b.split(" "),function(a){g(a);xb[a]&&g(xb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function gb(a,b){var d=a.ng339,c=d&&hb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Oc(a)),delete hb[d],a.ng339=u))}function wb(a,b){var d=a.ng339,d=d&&hb[d];b&&!d&&(a.ng339=d=++Hf,d=hb[d]={events:{},data:{},handle:u});return d}function Wb(a,b,d){if(Lc(a)){var c=
y(d),e=!c&&b&&!F(b),f=!b;a=(a=wb(a,!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];P(a,b)}}}function yb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function zb(a,b){b&&a.setAttribute&&n(b.split(" "),function(b){a.setAttribute("class",W((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+W(b)+" "," ")))})}function Ab(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ");n(b.split(" "),function(a){a=W(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",W(d))}}function Nc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function Pc(a,b){return Bb(a,"$"+(b||"ngController")+"Controller")}function Bb(a,b,d){9==a.nodeType&&(a=a.documentElement);for(b=K(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(y(d=A.data(a,b[c])))return d;a=a.parentNode||
11===a.nodeType&&a.host}}function Qc(a){for(vb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Xb(a,b){b||vb(a);var d=a.parentNode;d&&d.removeChild(a)}function If(a,b){b=b||R;if("complete"===b.document.readyState)b.setTimeout(a);else A(b).on("load",a)}function Rc(a,b){var d=Cb[b.toLowerCase()];return d&&Sc[pa(a)]&&d}function Jf(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(x(c.immediatePropagationStopped)){var h=
c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||Kf;1<g&&(f=da(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=a;return d}function Kf(a,b,d){d.call(a,b)}function Lf(a,b,d){var c=b.relatedTarget;c&&(c===a||Mf.call(a,c))||d.call(a,b)}function zf(){this.$get=
function(){return P(D,{hasClass:function(a,b){a.attr&&(a=a[0]);return yb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)}})}}function Ea(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=d+":"+(b||Vd)():d+":"+a}function Ta(a,b){if(b){var d=0;this.nextUid=function(){return++d}}n(a,this.put,this)}function Tc(a){a=a.toString().replace(Nf,
"");return a.match(Of)||a.match(Pf)}function Qf(a){return(a=Tc(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function eb(a,b){function d(a){return function(b,c){if(F(b))n(b,pc(a));else return a(b,c)}}function c(a,b){Sa(a,"service");if(C(b)||K(b))b=q.instantiate(b);if(!b.$get)throw Fa("pget",a);return s[a+"Provider"]=b}function e(a,b){return function(){var c=t.invoke(b,this);if(x(c))throw Fa("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){rb(x(a)||
K(a),"modulesToLoad","not an array");var b=[],c;n(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=q.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{J(a)?(c=Sb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):C(a)?b.push(q.invoke(a)):K(a)?b.push(q.invoke(a)):Ra(a,"module")}catch(e){throw K(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Fa("modulerr",a,e.stack||e.message||
e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Fa("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=eb.$$annotate(a,b,g),l,m,s;m=0;for(l=k.length;m<l;m++){s=k[m];if("string"!==typeof s)throw Fa("itkn",s);h.push(f&&f.hasOwnProperty(s)?f[s]:d(s,g))}K(a)&&(a=a[l]);return a.apply(c,h)}return{invoke:e,
instantiate:function(a,b,c){var d=Object.create((K(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return F(a)||C(a)?a:d},get:d,annotate:eb.$$annotate,has:function(b){return s.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Ta([],!0),s={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,ca(b),!1)}),constant:d(function(a,b){Sa(a,"constant");s[a]=b;B[a]=b}),
decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=t.invoke(d,c);return t.invoke(b,null,{$delegate:a})}}}},q=s.$injector=h(s,function(a,b){ga.isString(b)&&l.push(b);throw Fa("unpr",l.join(" <- "));}),B={},Q=h(B,function(a,b){var c=q.get(a+"Provider",b);return t.invoke(c.$get,c,u,a)}),t=Q;s.$injectorProvider={$get:ca(Q)};var p=g(a),t=Q.get("$injector");t.strictDi=b;n(p,function(a){a&&t.invoke(a)});return t}function Se(){var a=!0;this.disableAutoScrolling=function(){a=
!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===pa(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;C(c)?c=c():Ob(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):U(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=J(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?
f(b):"top"===a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||If(function(){c.$evalAsync(g)})});return g}]}function ib(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;K(a)&&(a=a.join(" "));K(b)&&(b=b.join(" "));return a+" "+b}function Rf(a){J(a)&&(a=a.split(" "));var b=V();n(a,function(a){a.length&&(b[a]=!0)});return b}function Ha(a){return F(a)?a:{}}function Sf(a,b,d,c){function e(a){try{a.apply(null,va.call(arguments,1))}finally{if(Q--,
0===Q)for(;t.length;)try{t.pop()()}catch(b){d.error(b)}}}function f(){M=null;g();h()}function g(){a:{try{p=m.state;break a}catch(a){}p=void 0}p=x(p)?null:p;la(p,Y)&&(p=Y);Y=p}function h(){if(w!==k.url()||z!==p)w=k.url(),z=p,n(G,function(a){a(k.url(),p)})}var k=this,l=a.location,m=a.history,s=a.setTimeout,q=a.clearTimeout,B={};k.isMock=!1;var Q=0,t=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){Q++};k.notifyWhenNoOutstandingRequests=function(a){0===Q?a():t.push(a)};var p,
z,w=l.href,aa=b.find("base"),M=null;g();z=p;k.url=function(b,d,e){x(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=z===e;if(w===b&&(!c.history||f))return k;var h=w&&Ia(w)===Ia(b);w=b;z=e;if(!c.history||h&&f){if(!h||M)M=b;d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b;l.href!==b&&(M=b)}else m[d?"replaceState":"pushState"](e,"",b),g(),z=p;return k}return M||l.href.replace(/%27/g,"'")};k.state=function(){return p};var G=[],E=!1,
Y=null;k.onUrlChange=function(b){if(!E){if(c.history)A(a).on("popstate",f);A(a).on("hashchange",f);E=!0}G.push(b);return b};k.$$applicationDestroyed=function(){A(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=aa.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;Q++;c=s(function(){delete B[c];e(a)},b||0);B[c]=!0;return c};k.defer.cancel=function(a){return B[a]?(delete B[a],q(a),e(v),!0):!1}}function Xe(){this.$get=["$window",
"$log","$sniffer","$document",function(a,b,d,c){return new Sf(a,c,b,d)}]}function Ye(){this.$get=function(){function a(a,c){function e(a){a!=s&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,s),s=a,s.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw I("$cacheFactory")("iid",a);var g=0,h=P({},c,{id:a}),k=V(),l=c&&c.capacity||Number.MAX_VALUE,m=V(),s=null,q=null;return b[a]={put:function(a,b){if(!x(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(q.key);
return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==s&&(s=b.p);b==q&&(q=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=V();g=0;m=V();s=q=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return P({},h,{size:g})}}}var b={};a.info=function(){var a={};n(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function tf(){this.$get=
["$cacheFactory",function(a){return a("templates")}]}function Dc(a,b){function d(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};n(a,function(a,f){var g=a.match(d);if(!g)throw ha("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f}});return e}function c(a){var b=a.charAt(0);if(!b||b!==N(b))throw ha("baddir",a);if(a!==a.trim())throw ha("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
g=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=Yd("ngSrc,ngSrcset,src,srcset"),k=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/;this.directive=function q(b,f){Sa(b,"directive");J(b)?(c(b),rb(f,"directiveFactory"),e.hasOwnProperty(b)||(e[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var f=[];n(e[b],function(e,g){try{var h=a.invoke(e);C(h)?h={compile:ca(h)}:!h.compile&&h.link&&(h.compile=ca(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=h.require||
h.controller&&h.name;h.restrict=h.restrict||"EA";var k=h,l=h,m=h.name,q={isolateScope:null,bindToController:null};F(l.scope)&&(!0===l.bindToController?(q.bindToController=d(l.scope,m,!0),q.isolateScope={}):q.isolateScope=d(l.scope,m,!1));F(l.bindToController)&&(q.bindToController=d(l.bindToController,m,!0));if(F(q.bindToController)){var Z=l.controller,Q=l.controllerAs;if(!Z)throw ha("noctrl",m);if(!Cc(Z,Q))throw ha("noident",m);}var na=k.$$bindings=q;F(na.isolateScope)&&(h.$$isolateBindings=na.isolateScope);
h.$$moduleName=e.$$moduleName;f.push(h)}catch(n){c(n)}});return f}])),e[b].push(f)):n(b,pc(q));return this};this.aHrefSanitizationWhitelist=function(a){return y(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return y(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var m=!0;this.debugInfoEnabled=function(a){return y(a)?(m=a,this):m};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest",
"$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,d,p,z,w,aa,M,G,E){function Y(a,b){try{a.addClass(b)}catch(c){}}function L(a,b,c,d,e){a instanceof A||(a=A(a));n(a,function(b,c){b.nodeType==Oa&&b.nodeValue.match(/\S+/)&&(a[c]=A(b).wrap("<span></span>").parent()[0])});var f=Z(a,b,a,c,d,e);L.$$addScopeClass(a);var g=null;return function(b,c,d){rb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;
d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==pa(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?A(U(g,A("<div>").append(a).html())):c?Qa.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);L.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);return d}}function Z(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,q,B,w;if(p)for(w=Array(c.length),m=0;m<h.length;m+=3)f=h[m],w[f]=c[f];else w=c;m=0;for(q=h.length;m<
q;)k=w[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),L.$$addScopeInfo(A(k),l)):l=a,B=c.transcludeOnThisElement?O(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?O(a,b):null,c(f,l,k,d,B)):f&&f(a,k.childNodes,u,e)}for(var h=[],k,l,m,q,p,B=0;B<a.length;B++){k=new ga;l=na(a[B],[],k,0===B?d:u,e);(f=l.length?oa(l,a[B],k,b,c,null,[],[],f):null)&&f.scope&&L.$$addScopeClass(k.$$element);k=f&&f.terminal||!(m=a[B].childNodes)||!m.length?null:Z(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&
f.transclude:b);if(f||k)h.push(B,f,k),q=!0,p=p||f;f=null}return q?g:null}function O(a,b,c){var d=function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})},e=d.$$slots=V(),f;for(f in b.$$slots)e[f]=O(a,b.$$slots[f],c);return d}function na(a,b,c,d,e){var h=c.$attr,k;switch(a.nodeType){case 1:I(b,ra(pa(a)),"E",d,e);for(var l,m,q,p=a.attributes,B=0,w=p&&p.length;B<w;B++){var G=!1,t=!1;l=p[B];k=l.name;m=W(l.value);
l=ra(k);if(q=ia.test(l))k=k.replace(Vc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(l=l.match(ka))&&R(l[1])&&(G=k,t=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=ra(k.toLowerCase());h[l]=k;if(q||!c.hasOwnProperty(l))c[l]=m,Rc(a,l)&&(c[l]=!0);T(a,b,m,l,q);I(b,l,"A",d,e,G,t)}a=a.className;F(a)&&(a=a.animVal);if(J(a)&&""!==a)for(;k=g.exec(a);)l=ra(k[2]),I(b,l,"C",d,e)&&(c[l]=W(k[3])),a=a.substr(k.index+k[0].length);break;case Oa:if(11===Ja)for(;a.parentNode&&a.nextSibling&&
a.nextSibling.nodeType===Oa;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);D(b,a.nodeValue);break;case 8:try{if(k=f.exec(a.nodeValue))l=ra(k[1]),I(b,l,"M",d,e)&&(c[l]=W(k[2]))}catch(L){}}b.sort(sa);return b}function Ga(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ha("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return A(d)}function r(a,b,c){return function(d,
e,f,g,h){e=Ga(e[0],b,c);return a(d,e,f,g,h)}}function y(a,b,c,d,e,f){if(a)return L(b,c,d,e,f);var g;return function(){g||(g=L(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function oa(a,b,d,e,f,g,h,l,m){function q(a,b,c,d){if(a){c&&(a=r(a,c,d));a.require=H.require;a.directiveName=oa;if(E===H||H.$$isolateScope)a=ba(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=r(b,c,d));b.require=H.require;b.directiveName=oa;if(E===H||H.$$isolateScope)b=ba(b,{isolateScope:!0});l.push(b)}}function p(a,b,c,d){var e;
if(J(b)){var f=b.match(k);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ha("ctreq",b,a);}else if(K(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=p(a,b[g],c,d);return e||null}function B(a,b,c,d,e,f){var g=V(),h;for(h in d){var k=d[h],l={$scope:k===E||k.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},m=k.controller;"@"==m&&(m=b[k.name]);l=z(m,l,!0,k.controllerAs);g[k.name]=
l;x||a.data("$"+k.name+"Controller",l.instance)}return g}function w(a,c,e,f,g){function k(a,b,c,d){var e;Za(a)||(d=c,c=b,b=a,a=u);x&&(e=z);c||(c=x?O.parent():O);if(d){var f=g.$$slots[d];if(!f)throw ha("noslot",d,qa(O));return f(a,b,e,c,Ga)}return g(a,b,e,c,Ga)}var m,q,G,z,Q,O,na;b===e?(f=d,O=d.$$element):(O=A(e),f=new ga(O,d));G=c;E?q=c.$new(!0):t&&(G=c.$parent);g&&(Q=k,Q.$$boundTransclude=g);Z&&(z=B(O,f,Q,Z,q,c));E&&(L.$$addScopeInfo(O,q,!0,!(Y&&(Y===E||Y===E.$$originalDirective))),L.$$addScopeClass(O,
!0),q.$$isolateBindings=E.$$isolateBindings,(na=fa(c,f,q,q.$$isolateBindings,E))&&q.$on("$destroy",na));for(var Uc in z){na=Z[Uc];var n=z[Uc],M=na.$$bindings.bindToController;n.identifier&&M&&(m=fa(G,f,n.instance,M,na));var aa=n();aa!==n.instance&&(n.instance=aa,O.data("$"+na.name+"Controller",aa),m&&m(),m=fa(G,f,n.instance,M,na))}ja=0;for(S=h.length;ja<S;ja++)m=h[ja],ea(m,m.isolateScope?q:c,O,f,m.require&&p(m.directiveName,m.require,O,z),Q);var Ga=c;E&&(E.template||null===E.templateUrl)&&(Ga=q);
a&&a(Ga,e.childNodes,u,g);for(ja=l.length-1;0<=ja;ja--)m=l[ja],ea(m,m.isolateScope?q:c,O,f,m.require&&p(m.directiveName,m.require,O,z),Q)}m=m||{};for(var G=-Number.MAX_VALUE,t=m.newScopeDirective,Z=m.controllerDirectives,E=m.newIsolateScopeDirective,Y=m.templateDirective,O=m.nonTlbTranscludeDirective,M=!1,aa=!1,x=m.hasElementTranscludeDirective,v=d.$$element=A(b),H,oa,I,N=e,P,sa=!1,R=!1,D,ja=0,S=a.length;ja<S;ja++){H=a[ja];var Db=H.$$start,Yb=H.$$end;Db&&(v=Ga(b,Db,Yb));I=u;if(G>H.priority)break;
if(D=H.scope)H.templateUrl||(F(D)?(Ua("new/isolated scope",E||t,H,v),E=H):Ua("new/isolated scope",E,H,v)),t=t||H;oa=H.name;if(!sa&&(H.replace&&(H.templateUrl||H.template)||H.transclude&&!H.$$tlb)){for(D=ja+1;sa=a[D++];)if(sa.transclude&&!sa.$$tlb||sa.replace&&(sa.templateUrl||sa.template)){R=!0;break}sa=!0}!H.templateUrl&&H.controller&&(D=H.controller,Z=Z||V(),Ua("'"+oa+"' controller",Z[oa],H,v),Z[oa]=H);if(D=H.transclude)if(M=!0,H.$$tlb||(Ua("transclusion",O,H,v),O=H),"element"==D)x=!0,G=H.priority,
I=v,v=d.$$element=A(X.createComment(" "+oa+": "+d[oa]+" ")),b=v[0],$(f,va.call(I,0),b),N=y(R,I,e,G,g&&g.name,{nonTlbTranscludeDirective:O});else{var T=V();I=A(Vb(b)).contents();if(F(D)){I=[];var ca=V(),da=V();n(D,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;ca[b]=a;T[a]=[];da[a]=c});n(v.children(),function(a){var b=ca[ra(pa(a))];b?(da[b]=!0,T[b].push(a)):I.push(a)});n(da,function(a,b){if(!a)throw ha("reqslot",b);});n(Object.keys(T),function(a){T[a]=y(R,T[a],e)})}v.empty();N=y(R,I,e,
u,u,{needsNewScope:H.$$isolateScope||H.$$newScope});N.$$slots=T}if(H.template)if(aa=!0,Ua("template",Y,H,v),Y=H,D=C(H.template)?H.template(v,d):H.template,D=ma(D),H.replace){g=H;I=Tb.test(D)?Wc(U(H.templateNamespace,W(D))):[];b=I[0];if(1!=I.length||1!==b.nodeType)throw ha("tplrt",oa,"");$(f,v,b);D={$attr:{}};var ia=na(b,[],D),ka=a.splice(ja+1,a.length-(ja+1));(E||t)&&Xc(ia,E,t);a=a.concat(ia).concat(ka);Yc(d,D);S=a.length}else v.html(D);if(H.templateUrl)aa=!0,Ua("template",Y,H,v),Y=H,H.replace&&(g=
H),w=Tf(a.splice(ja,a.length-ja),v,d,f,M&&N,h,l,{controllerDirectives:Z,newScopeDirective:t!==H&&t,newIsolateScopeDirective:E,templateDirective:Y,nonTlbTranscludeDirective:O}),S=a.length;else if(H.compile)try{P=H.compile(v,d,N),C(P)?q(null,P,Db,Yb):P&&q(P.pre,P.post,Db,Yb)}catch(la){c(la,qa(v))}H.terminal&&(w.terminal=!0,G=Math.max(G,H.priority))}w.scope=t&&!0===t.scope;w.transcludeOnThisElement=M;w.templateOnThisElement=aa;w.transclude=N;m.hasElementTranscludeDirective=x;return w}function Xc(a,b,
c){for(var d=0,e=a.length;d<e;d++)a[d]=Pb(a[d],{$$isolateScope:b,$$newScope:c})}function I(b,d,f,g,h,k,l){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var m;d=a.get(d+"Directive");for(var p=0,B=d.length;p<B;p++)try{m=d[p],(x(g)||g>m.priority)&&-1!=m.restrict.indexOf(f)&&(k&&(m=Pb(m,{$$start:k,$$end:l})),b.push(m),h=m)}catch(w){c(w)}}return h}function R(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function Yc(a,b){var c=
b.$attr,d=a.$attr,e=a.$$element;n(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});n(b,function(b,f){"class"==f?(Y(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Tf(a,b,c,e,f,g,h,k){var l=[],m,q,p=b[0],B=a.shift(),w=Pb(B,{templateUrl:null,transclude:null,replace:null,$$originalDirective:B}),
G=C(B.templateUrl)?B.templateUrl(b,c):B.templateUrl,L=B.templateNamespace;b.empty();d(G).then(function(d){var t,E;d=ma(d);if(B.replace){d=Tb.test(d)?Wc(U(L,W(d))):[];t=d[0];if(1!=d.length||1!==t.nodeType)throw ha("tplrt",B.name,G);d={$attr:{}};$(e,b,t);var z=na(t,[],d);F(B.scope)&&Xc(z,!0);a=z.concat(a);Yc(c,d)}else t=p,b.html(d);a.unshift(w);m=oa(a,t,c,f,b,B,g,h,k);n(e,function(a,c){a==t&&(e[c]=b[0])});for(q=Z(b[0].childNodes,f);l.length;){d=l.shift();E=l.shift();var Q=l.shift(),M=l.shift(),z=b[0];
if(!d.$$destroyed){if(E!==p){var aa=E.className;k.hasElementTranscludeDirective&&B.replace||(z=Vb(t));$(Q,A(E),z);Y(A(z),aa)}E=m.transcludeOnThisElement?O(d,m.transclude,M):M;m(q,d,z,e,E)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(m.transcludeOnThisElement&&(a=O(b,m.transclude,e)),m(q,b,c,d,a)))}}function sa(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Ua(a,b,c,d){function e(a){return a?" (module: "+a+
")":""}if(b)throw ha("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,qa(d));}function D(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&L.$$addBindingClass(a);return function(a,c){var e=c.parent();b||L.$$addBindingClass(e);L.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function U(a,b){a=N(a||"html");switch(a){case "svg":case "math":var c=X.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;
default:return b}}function S(a,b){if("srcdoc"==b)return M.HTML;var c=pa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return M.RESOURCE_URL}function T(a,c,d,e,f){var g=S(a,e);f=h[e]||f;var k=b(d,!0,g,f);if(k){if("multiple"===e&&"select"===pa(a))throw ha("selmulti",qa(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers=V());if(l.test(e))throw ha("nodomevents");var m=h[e];m!==d&&(k=m&&b(m,!0,g,f),d=m);k&&(h[e]=k(a),
(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(k,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,a)}))}}}})}}function $(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);A.hasData(d)&&(A.data(c,A.data(d)),
A(d).off("$destroy"));A.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function ba(a,b){return P(function(){return a.apply(null,arguments)},a,b)}function ea(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,qa(d))}}function fa(a,c,d,e,f){var g=[];n(e,function(e,h){var k=e.attrName,l=e.optional,m,q,w,G;switch(e.mode){case "@":l||ua.call(c,k)||(d[h]=c[k]=void 0);c.$observe(k,function(a){J(a)&&(d[h]=a)});c.$$observers[k].$$scope=a;J(c[k])&&(d[h]=b(c[k])(a));break;case "=":if(!ua.call(c,
k)){if(l)break;c[k]=void 0}if(l&&!c[k])break;q=p(c[k]);G=q.literal?la:function(a,b){return a===b||a!==a&&b!==b};w=q.assign||function(){m=d[h]=q(a);throw ha("nonassign",c[k],f.name);};m=d[h]=q(a);l=function(b){G(b,d[h])||(G(b,m)?w(a,b=d[h]):d[h]=b);return m=b};l.$stateful=!0;l=e.collection?a.$watchCollection(c[k],l):a.$watch(p(c[k],l),null,q.literal);g.push(l);break;case "&":q=c.hasOwnProperty(k)?p(c[k]):v;if(q===v&&l)break;d[h]=function(b){return q(a,b)}}});return g.length&&function(){for(var a=0,
b=g.length;a<b;++a)g[a]()}}var ga=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};ga.prototype={$normalize:ra,$addClass:function(a){a&&0<a.length&&G.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&G.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Zc(a,b);c&&c.length&&G.addClass(this.$$element,c);(c=Zc(b,a))&&c.length&&G.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=
Rc(this.$$element[0],a),g=$c[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=zc(a,"-"));f=pa(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===f&&"src"===a)this[a]=b=E(b,"src"===a);else if("img"===f&&"srcset"===a){for(var f="",g=W(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+E(W(g[m]),!0),f=f+(" "+W(g[m+1]));g=W(g[2*l]).split(/\s/);
f+=E(W(g[0]),!0);2===g.length&&(f+=" "+W(g[1]));this[a]=b=f}!1!==d&&(null===b||x(b)?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&n(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=V()),e=d[a]||(d[a]=[]);e.push(b);w.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||x(c[a])||b(c[a])});return function(){ab(e,b)}}};var ca=b.startSymbol(),da=b.endSymbol(),ma="{{"==ca||"}}"==da?Ya:function(a){return a.replace(/\{\{/g,
ca).replace(/}}/g,da)},ia=/^ngAttr[A-Z]/,ka=/^(.+)Start$/;L.$$addBindingInfo=m?function(a,b){var c=a.data("$binding")||[];K(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:v;L.$$addBindingClass=m?function(a){Y(a,"ng-binding")}:v;L.$$addScopeInfo=m?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:v;L.$$addScopeClass=m?function(a,b){Y(a,b?"ng-isolate-scope":"ng-scope")}:v;return L}]}function ra(a){return fb(a.replace(Vc,""))}function Zc(a,b){var d="",c=a.split(/\s+/),
e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function Wc(a){a=A(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&Uf.call(a,b,1);return a}function Cc(a,b){if(b&&J(b))return b;if(J(a)){var d=ad.exec(a);if(d)return d[3]}}function Ze(){var a={},b=!1;this.register=function(b,c){Sa(b,"controller");F(b)?P(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,
b,c,d){if(!a||!F(a.$scope))throw I("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,s;h=!0===h;k&&J(k)&&(s=k);if(J(f)){k=f.match(ad);if(!k)throw Vf("ctrlfmt",f);m=k[1];s=s||k[3];f=a.hasOwnProperty(m)?a[m]:Bc(g.$scope,m,!0)||(b?Bc(c,m,!0):u);Ra(f,m,!0)}if(h)return h=(K(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),s&&e(g,s,l,m||f.name),P(function(){var a=d.invoke(f,l,g,m);a!==l&&(F(a)||C(a))&&(l=a,s&&e(g,s,l,m||f.name));return l},{instance:l,identifier:s});l=d.instantiate(f,
g,m);s&&e(g,s,l,m||f.name);return l}}]}function $e(){this.$get=["$window",function(a){return A(a.document)}]}function af(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function Zb(a){return F(a)?fa(a)?a.toISOString():db(a):a}function ff(){this.$get=function(){return function(a){if(!a)return"";var b=[];oc(a,function(a,c){null===a||x(a)||(K(a)?n(a,function(a,d){b.push(ma(c)+"="+ma(Zb(a)))}):b.push(ma(c)+"="+ma(Zb(a))))});return b.join("&")}}}function gf(){this.$get=
function(){return function(a){function b(a,e,f){null===a||x(a)||(K(a)?n(a,function(a,c){b(a,e+"["+(F(a)?c:"")+"]")}):F(a)&&!fa(a)?oc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ma(e)+"="+ma(Zb(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function $b(a,b){if(J(a)){var d=a.replace(Wf,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(bd))||(c=(c=d.match(Xf))&&Yf[c[0]].test(d));c&&(a=uc(d))}}return a}function cd(a){var b=V(),d;J(a)?n(a.split("\n"),function(a){d=
a.indexOf(":");var e=N(W(a.substr(0,d)));a=W(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):F(a)&&n(a,function(a,d){var f=N(d),g=W(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function dd(a){var b;return function(d){b||(b=cd(a));return d?(d=b[N(d)],void 0===d&&(d=null),d):b}}function ed(a,b,d,c){if(C(c))return c(a,b,d);n(c,function(c){a=c(a,b,d)});return a}function ef(){var a=this.defaults={transformResponse:[$b],transformRequest:[function(a){return F(a)&&"[object File]"!==wa.call(a)&&"[object Blob]"!==
wa.call(a)&&"[object FormData]"!==wa.call(a)?db(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:da(ac),put:da(ac),patch:da(ac)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return y(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return y(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",
function(e,f,g,h,k,l){function m(b){function c(a){var b=P({},a);b.data=ed(a.data,a.headers,a.status,f.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}function e(a,b){var c,d={};n(a,function(a,e){C(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}if(!F(b))throw I("$http")("badreq",b);var f=P({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);f.headers=function(b){var c=a.headers,d=P({},b.headers),f,g,h,c=P({},
c.common,c[N(b.method)]);a:for(f in c){g=N(f);for(h in d)if(N(h)===g)continue a;d[f]=c[f]}return e(d,da(b))}(b);f.method=tb(f.method);f.paramSerializer=J(f.paramSerializer)?l.get(f.paramSerializer):f.paramSerializer;var g=[function(b){var d=b.headers,e=ed(b.data,dd(d),u,b.transformRequest);x(e)&&n(d,function(a,b){"content-type"===N(b)&&delete d[b]});x(b.withCredentials)&&!x(a.withCredentials)&&(b.withCredentials=a.withCredentials);return s(b,e).then(c,c)},u],h=k.when(f);for(n(Q,function(a){(a.request||
a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){b=g.shift();var m=g.shift(),h=h.then(b,m)}d?(h.success=function(a){Ra(a,"fn");h.then(function(b){a(b.data,b.status,b.headers,f)});return h},h.error=function(a){Ra(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=fd("success"),h.error=fd("error"));return h}function s(c,d){function g(a,c,d,e){function f(){l(c,a,d,e)}n&&(200<=a&&300>
a?n.put(O,[a,c,cd(d),e]):n.remove(O));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function l(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?G.resolve:G.reject)({data:a,status:b,headers:dd(d),config:c,statusText:e})}function s(a){l(a.data,a.status,da(a.headers()),a.statusText)}function Q(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,1)}var G=k.defer(),E=G.promise,n,L,Z=c.headers,O=q(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);E.then(Q,Q);!c.cache&&!a.cache||!1===
c.cache||"GET"!==c.method&&"JSONP"!==c.method||(n=F(c.cache)?c.cache:F(a.cache)?a.cache:B);n&&(L=n.get(O),y(L)?L&&C(L.then)?L.then(s,s):K(L)?l(L[1],L[0],da(L[2]),L[3]):l(L,200,{},"OK"):n.put(O,E));x(L)&&((L=gd(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:u)&&(Z[c.xsrfHeaderName||a.xsrfHeaderName]=L),e(c.method,O,d,g,Z,c.timeout,c.withCredentials,c.responseType));return E}function q(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var B=g("$http");a.paramSerializer=J(a.paramSerializer)?
l.get(a.paramSerializer):a.paramSerializer;var Q=[];n(c,function(a){Q.unshift(J(a)?l.get(a):l.invoke(a))});m.pendingRequests=[];(function(a){n(arguments,function(a){m[a]=function(b,c){return m(P({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){n(arguments,function(a){m[a]=function(b,c,d){return m(P({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=a;return m}]}function jf(){this.$get=function(){return function(){return new R.XMLHttpRequest}}}function hf(){this.$get=
["$browser","$window","$document","$xhrFactory",function(a,b,d,c){return Zf(a,c,a.defer,b.angular.callbacks,d[0])}]}function Zf(a,b,d,c,e){function f(a,b,d){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,B="unknown";a&&("load"!==a.type||c[b].called||(a={type:"error"}),B=a.type,g="error"===a.type?404:200);d&&d(g,B)};f.addEventListener("load",
m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,s,q,B){function Q(){z&&z();w&&w.abort()}function t(b,c,e,f,g){y(M)&&d.cancel(M);z=w=null;b(c,e,f,g);a.$$completeOutstandingRequest(v)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"==N(e)){var p="_"+(c.counter++).toString(36);c[p]=function(a){c[p].data=a;c[p].called=!0};var z=f(h.replace("JSON_CALLBACK","angular.callbacks."+p),p,function(a,b){t(l,a,c[p].data,"",b);c[p]=v})}else{var w=b(e,h);w.open(e,
h,!0);n(m,function(a,b){y(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==ya(h).protocol?404:0);t(l,c,b,w.getAllResponseHeaders(),a)};e=function(){t(l,-1,null,null,"")};w.onerror=e;w.onabort=e;q&&(w.withCredentials=!0);if(B)try{w.responseType=B}catch(aa){if("json"!==B)throw aa;}w.send(x(k)?null:k)}if(0<s)var M=d(Q,s);else s&&C(s.then)&&s.then(Q)}}function cf(){var a="{{",b="}}";
this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(s,a).replace(q,b)}function h(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function k(f,k,s,q){function z(a){try{var b=a;a=s?e.getTrusted(s,b):e.valueOf(b);var d;if(q&&!y(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=
""+a;break;default:a=db(a)}d=a}return d}catch(g){c(Ka.interr(f,g))}}if(!f.length||-1===f.indexOf(a)){var w;k||(k=g(f),w=ca(k),w.exp=f,w.expressions=[],w.$$watchDelegate=h);return w}q=!!q;var n,M,G=0,E=[],Y=[];w=f.length;for(var L=[],Z=[];G<w;)if(-1!=(n=f.indexOf(a,G))&&-1!=(M=f.indexOf(b,n+l)))G!==n&&L.push(g(f.substring(G,n))),G=f.substring(n+l,M),E.push(G),Y.push(d(G,z)),G=M+m,Z.push(L.length),L.push("");else{G!==w&&L.push(g(f.substring(G)));break}s&&1<L.length&&Ka.throwNoconcat(f);if(!k||E.length){var O=
function(a){for(var b=0,c=E.length;b<c;b++){if(q&&x(a[b]))return;L[Z[b]]=a[b]}return L.join("")};return P(function(a){var b=0,d=E.length,e=Array(d);try{for(;b<d;b++)e[b]=Y[b](a);return O(e)}catch(g){c(Ka.interr(f,g))}},{exp:f,expressions:E,$$watchDelegate:function(a,b){var c;return a.$watchGroup(Y,function(d,e){var f=O(d);C(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,s=new RegExp(a.replace(/./g,f),"g"),q=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a};k.endSymbol=
function(){return b};return k}]}function df(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){function f(f,k,l,m){function s(){q?f.apply(null,B):f(p)}var q=4<arguments.length,B=q?va.call(arguments,4):[],n=b.setInterval,t=b.clearInterval,p=0,z=y(m)&&!m,w=(z?c:d).defer(),aa=w.promise;l=y(l)?l:0;aa.$$intervalId=n(function(){z?e.defer(s):a.$evalAsync(s);w.notify(p++);0<l&&p>=l&&(w.resolve(p),t(aa.$$intervalId),delete g[aa.$$intervalId]);z||a.$apply()},k);g[aa.$$intervalId]=
w;return aa}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function bc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=pb(a[b]);return a.join("/")}function hd(a,b){var d=ya(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=ba(d.port)||$f[d.protocol]||null}function id(a,b){var d="/"!==a.charAt(0);d&&(a="/"+a);var c=ya(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?
c.pathname.substring(1):c.pathname);b.$$search=xc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function ta(a,b){if(0===b.indexOf(a))return b.substr(a.length)}function Ia(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function jb(a){return a.replace(/(#.+)|#$/,"$1")}function cc(a,b,d){this.$$html5=!0;d=d||"";hd(a,this);this.$$parse=function(a){var d=ta(b,a);if(!J(d))throw Eb("ipthprfx",a,b);id(d,this);this.$$path||(this.$$path="/");this.$$compose()};
this.$$compose=function(){var a=Rb(this.$$search),d=this.$$hash?"#"+pb(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;y(f=ta(a,c))?(g=f,g=y(f=ta(d,f))?b+(ta("/",f)||f):a+g):y(f=ta(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function dc(a,b,d){hd(a,this);this.$$parse=function(c){var e=ta(a,c)||ta(b,c),f;x(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f=
"",x(e)&&(a=c,this.replace())):(f=ta(d,e),x(f)&&(f=e));id(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Rb(this.$$search),e=this.$$hash?"#"+pb(this.$$hash):"";this.$$url=bc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ia(a)==Ia(b)?(this.$$parse(b),!0):!1}}function jd(a,b,d){this.$$html5=!0;
dc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Ia(c)?f=c:(g=ta(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Rb(this.$$search),e=this.$$hash?"#"+pb(this.$$hash):"";this.$$url=bc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Fb(a){return function(){return this[a]}}function kd(a,b){return function(d){if(x(d))return this[a];this[a]=b(d);this.$$compose();return this}}
function kf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return y(b)?(a=b,this):a};this.html5Mode=function(a){return $a(a)?(b.enabled=a,this):F(a)?($a(a.enabled)&&(b.enabled=a.enabled),$a(a.requireBase)&&(b.requireBase=a.requireBase),$a(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),
l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var s=c.url(),q;if(b.enabled){if(!m&&b.requireBase)throw Eb("nobase");q=s.substring(0,s.indexOf("/",s.indexOf("//")+2))+(m||"/");m=e.history?cc:jd}else q=Ia(s),m=dc;var B=q.substr(0,Ia(q).lastIndexOf("/")+1);l=new m(q,B,"#"+a);l.$$parseLinkUrl(s,s);l.$$state=c.state();var n=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&
2!=a.which&&2!=a.button){for(var e=A(a.target);"a"!==pa(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");F(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=ya(h.animVal).href);n.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});jb(l.absUrl())!=jb(s)&&c.url(l.absUrl(),!0);var t=!0;c.onUrlChange(function(a,b){x(ta(B,
a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=jb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(t=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=jb(c.url()),b=jb(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(t||m)t=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,
f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&h(b,g,f===l.$$state?null:l.$$state),k(a,f)))});l.$$replace=!1});return l}]}function lf(){var a=!0,b=this;this.debugEnabled=function(b){return y(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||
v;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];n(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Va(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===a||"__proto__"===a)throw ea("isecfld",b);return a}function ld(a,b){a+="";if(!J(a))throw ea("iseccst",
b);return a}function za(a,b){if(a){if(a.constructor===a)throw ea("isecfn",b);if(a.window===a)throw ea("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw ea("isecdom",b);if(a===Object)throw ea("isecobj",b);}return a}function md(a,b){if(a){if(a.constructor===a)throw ea("isecfn",b);if(a===ag||a===bg||a===cg)throw ea("isecff",b);}}function nd(a,b){if(a&&(a===(0).constructor||a===(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw ea("isecaf",
b);}function dg(a,b){return"undefined"!==typeof a?a:b}function od(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function S(a,b){var d,c;switch(a.type){case r.Program:d=!0;n(a.body,function(a){S(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;case r.Literal:a.constant=!0;a.toWatch=[];break;case r.UnaryExpression:S(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case r.BinaryExpression:S(a.left,b);S(a.right,b);a.constant=a.left.constant&&
a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case r.LogicalExpression:S(a.left,b);S(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case r.ConditionalExpression:S(a.test,b);S(a.alternate,b);S(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case r.Identifier:a.constant=!1;a.toWatch=[a];break;case r.MemberExpression:S(a.object,b);a.computed&&S(a.property,b);
a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case r.CallExpression:d=a.filter?!b(a.callee.name).$stateful:!1;c=[];n(a.arguments,function(a){S(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case r.AssignmentExpression:S(a.left,b);S(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case r.ArrayExpression:d=!0;c=[];n(a.elements,function(a){S(a,b);d=
d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case r.ObjectExpression:d=!0;c=[];n(a.properties,function(a){S(a.value,b);d=d&&a.value.constant;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case r.ThisExpression:a.constant=!1,a.toWatch=[]}}function pd(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:u}}function qd(a){return a.type===r.Identifier||a.type===r.MemberExpression}function rd(a){if(1===
a.body.length&&qd(a.body[0].expression))return{type:r.AssignmentExpression,left:a.body[0].expression,right:{type:r.NGValueParameter},operator:"="}}function sd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===r.Literal||a.body[0].expression.type===r.ArrayExpression||a.body[0].expression.type===r.ObjectExpression)}function td(a,b){this.astBuilder=a;this.$filter=b}function ud(a,b){this.astBuilder=a;this.$filter=b}function Gb(a){return"constructor"==a}function ec(a){return C(a.valueOf)?
a.valueOf():eg.call(a)}function mf(){var a=V(),b=V();this.$get=["$filter",function(d){function c(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=ec(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function e(a,b,d,e,f){var g=e.inputs,h;if(1===g.length){var k=c,g=g[0];return a.$watch(function(a){var b=g(a);c(b,k)||(h=e(a,u,u,[b]),k=b&&ec(b));return h},b,d,f)}for(var l=[],m=[],s=0,n=g.length;s<n;s++)l[s]=c,m[s]=null;return a.$watch(function(a){for(var b=!1,d=0,f=g.length;d<f;d++){var k=g[d](a);
if(b||(b=!c(k,l[d])))m[d]=k,l[d]=k&&ec(k)}b&&(h=e(a,u,u,m));return h},b,d,f)}function f(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;C(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function g(a,b,c,d){function e(a){var b=!0;n(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;C(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function h(a,b,c,d){var e;return e=
a.$watch(function(a){e();return d(a)},b,c)}function k(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==g&&c!==f?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return y(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==e?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=e,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var l=Da().noUnsafeEval,m={csp:l,expensiveChecks:!1},s={csp:l,expensiveChecks:!0};return function(c,l,
n){var t,p,z;switch(typeof c){case "string":z=c=c.trim();var w=n?b:a;t=w[z];t||(":"===c.charAt(0)&&":"===c.charAt(1)&&(p=!0,c=c.substring(2)),n=n?s:m,t=new fc(n),t=(new gc(t,d,n)).parse(c),t.constant?t.$$watchDelegate=h:p?t.$$watchDelegate=t.literal?g:f:t.inputs&&(t.$$watchDelegate=e),w[z]=t);return k(t,l);case "function":return k(c,l);default:return v}}}]}function of(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return vd(function(b){a.$evalAsync(b)},b)}]}function pf(){this.$get=["$browser",
"$exceptionHandler",function(a,b){return vd(function(b){a.defer(b)},b)}]}function vd(a,b){function d(){this.$$state={status:0}}function c(a,b){return function(c){b.call(a,c)}}function e(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=u;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];try{C(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}function f(){this.promise=
new d}var g=I("$q",TypeError);P(d.prototype,{then:function(a,b,c){if(x(a)&&x(b)&&x(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&e(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}});P(f.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(g("qcycle",
a)):this.$$resolve(a))},$$resolve:function(a){function d(a){k||(k=!0,h.$$resolve(a))}function f(a){k||(k=!0,h.$$reject(a))}var g,h=this,k=!1;try{if(F(a)||C(a))g=a&&a.then;C(g)?(this.promise.$$state.status=-1,g.call(a,d,f,c(this,this.notify))):(this.promise.$$state.value=a,this.promise.$$state.status=1,e(this.promise.$$state))}catch(l){f(l),b(l)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;e(this.promise.$$state)},
notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(C(a)?a(c):c)}catch(h){b(h)}}})}});var h=function(a,b){var c=new f;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{C(c)&&(d=c())}catch(e){return h(e,!1)}return d&&C(d.then)?d.then(function(){return h(a,b)},function(a){return h(a,!1)}):h(a,b)},l=function(a,b,c,d){var e=new f;e.resolve(a);return e.promise.then(b,
c,d)},m=function q(a){if(!C(a))throw g("norslvr",a);if(!(this instanceof q))return new q(a);var b=new f;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};m.defer=function(){var a=new f;a.resolve=c(a,a.resolve);a.reject=c(a,a.reject);a.notify=c(a,a.notify);return a};m.reject=function(a){var b=new f;b.reject(a);return b.promise};m.when=l;m.resolve=l;m.all=function(a){var b=new f,c=0,d=K(a)?[]:{};n(a,function(a,e){c++;l(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},
function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return m}function yf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function nf(){function a(a){function b(){this.$$watchers=
this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++ob;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=I("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===Ja&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=
a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++ob;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function s(a){if(z.$$phase)throw d("inprog",z.$$phase);z.$$phase=a}function q(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function B(a,b,c){do a.$$listenerCount[c]-=
b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function r(){}function t(){for(;M.length;)try{M.shift()()}catch(a){f(a)}e=null}function p(){null===e&&(e=h.defer(function(){z.$apply(t)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=
d;(b||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:r,get:f,exp:e||a,eq:!!d};c=null;C(b)||(l.fn=v);k||(k=h.$$watchers=[]);k.unshift(l);q(this,1);return function(){0<=ab(k,l)&&q(h,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&
b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});n(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!x(e)){if(F(e))if(Ba(e))for(f!==s&&(f=s,n=f.length=0,l++),a=e.length,n!==a&&(l++,f.length=n=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==
q&&(f=q={},n=0,l++);a=0;for(b in e)ua.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(n++,f[b]=g,l++));if(n>a)for(b in l++,f)ua.call(e,b)||(n--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),s=[],q={},p=!0,n=0;return this.$watch(m,function(){p?(p=!1,b(e,e,d)):b(e,h,d);if(k)if(F(e))if(Ba(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ua.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,
g,k,l,m,q,p=b,n,B=[],M,v;s("$digest");h.$$checkUrlChange();this===z&&null!==e&&(h.defer.cancel(e),t());c=null;do{q=!1;for(n=this;w.length;){try{v=w.shift(),v.scope.$eval(v.expression,v.locals)}catch(x){f(x)}c=null}a:do{if(l=n.$$watchers)for(m=l.length;m--;)try{if(a=l[m])if((g=a.get(n))!==(k=a.last)&&!(a.eq?la(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))q=!0,c=a,a.last=a.eq?bb(g,null):g,a.fn(g,k===r?g:k,n),5>p&&(M=4-p,B[M]||(B[M]=[]),B[M].push({msg:C(a.exp)?"fn: "+(a.exp.name||
a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){q=!1;break a}}catch(y){f(y)}if(!(l=n.$$watchersCount&&n.$$childHead||n!==this&&n.$$nextSibling))for(;n!==this&&!(l=n.$$nextSibling);)n=n.$parent}while(n=l);if((q||w.length)&&!p--)throw z.$$phase=null,d("infdig",b,B);}while(q||w.length);for(z.$$phase=null;u.length;)try{u.shift()()}catch(A){f(A)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===z&&h.$$applicationDestroyed();
q(this,-this.$$watchersCount);for(var b in this.$$listenerCount)B(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=v;this.$on=this.$watch=this.$watchGroup=function(){return v};this.$$listeners=
{};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){z.$$phase||w.length||h.defer(function(){w.length&&z.$digest()});w.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){u.push(a)},$apply:function(a){try{s("$apply");try{return this.$eval(a)}finally{z.$$phase=null}}catch(b){f(b)}finally{try{z.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&M.push(b);p()},$on:function(a,b){var c=this.$$listeners[a];
c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,B(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=cb([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,
k)}catch(s){f(s)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=cb([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&
c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var z=new m,w=z.$$asyncQueue=[],u=z.$$postDigestQueue=[],M=z.$$applyAsyncQueue=[];return z}]}function ie(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=
c?b:a,f;f=ya(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function fg(a){if("self"===a)return a;if(J(a)){if(-1<a.indexOf("***"))throw Aa("iwcard",a);a=wd(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+a+"$")}if(Na(a))return new RegExp("^"+a.source+"$");throw Aa("imatcher");}function xd(a){var b=[];y(a)&&n(a,function(a){b.push(fg(a))});return b}function rf(){this.SCE_CONTEXTS=ka;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=xd(b));return a};
this.resourceUrlBlacklist=function(a){arguments.length&&(b=xd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?gd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Aa("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));
var g=e(),h={};h[ka.HTML]=e(g);h[ka.CSS]=e(g);h[ka.URL]=e(g);h[ka.JS]=e(g);h[ka.RESOURCE_URL]=e(h[ka.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Aa("icontext",a,b);if(null===b||x(b)||""===b)return b;if("string"!==typeof b)throw Aa("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||x(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===ka.RESOURCE_URL){var g=ya(e.toString()),s,q,n=!1;
s=0;for(q=a.length;s<q;s++)if(c(a[s],g)){n=!0;break}if(n)for(s=0,q=b.length;s<q;s++)if(c(b[s],g)){n=!1;break}if(n)return e;throw Aa("insecurl",e.toString());}if(d===ka.HTML)return f(e);throw Aa("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function qf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ja)throw Aa("iequirks");var c=da(ka);c.isEnabled=function(){return a};c.trustAs=d.trustAs;
c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;n(ka,function(a,b){var d=N(b);c[fb("parse_as_"+d)]=function(b){return e(a,b)};c[fb("get_trusted_"+d)]=function(b){return f(a,b)};c[fb("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function sf(){this.$get=["$window","$document",
function(a,b){var d={},c=ba((/android (\d+)/.exec(N((a.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((a.navigator||{}).userAgent),f=b[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,k=f.body&&f.body.style,l=!1,m=!1;if(k){for(var s in k)if(l=h.exec(s)){g=l[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||g+"Transition"in k);m=!!("animation"in k||g+"Animation"in k);!c||l&&m||(l=J(k.webkitTransition),m=J(k.webkitAnimation))}return{history:!(!a.history||
!a.history.pushState||4>c||e),hasEvent:function(a){if("input"===a&&11>=Ja)return!1;if(x(d[a])){var b=f.createElement("div");d[a]="on"+a in b}return d[a]},csp:Da(),vendorPrefix:g,transitions:l,animations:m,android:c}}]}function uf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$templateCache","$http","$q","$sce",function(b,d,c,e){function f(g,h){f.totalPendingRequests++;J(g)&&b.get(g)||(g=e.getTrustedResourceUrl(g));var k=d.defaults&&d.defaults.transformResponse;K(k)?k=k.filter(function(a){return a!==
$b}):k===$b&&(k=null);return d.get(g,P({cache:b,transformResponse:k},a))["finally"](function(){f.totalPendingRequests--}).then(function(a){b.put(g,a.data);return a.data},function(a){if(!h)throw ha("tpload",g,a.status,a.statusText);return c.reject(a)})}f.totalPendingRequests=0;return f}]}function vf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];n(a,function(a){var c=ga.element(a).data("$binding");
c&&n(c,function(c){d?(new RegExp("(^|\\s)"+wd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function wf(){this.$get=["$rootScope",
"$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){C(f)||(l=k,k=f,f=v);var m=va.call(arguments,3),s=y(l)&&!l,q=(s?c:d).defer(),n=q.promise,r;r=b.defer(function(){try{q.resolve(f.apply(null,m))}catch(b){q.reject(b),e(b)}finally{delete g[n.$$timeoutId]}s||a.$apply()},k);n.$$timeoutId=r;g[r]=q;return n}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}function ya(a){Ja&&
(T.setAttribute("href",a),a=T.href);T.setAttribute("href",a);return{href:T.href,protocol:T.protocol?T.protocol.replace(/:$/,""):"",host:T.host,search:T.search?T.search.replace(/^\?/,""):"",hash:T.hash?T.hash.replace(/^#/,""):"",hostname:T.hostname,port:T.port,pathname:"/"===T.pathname.charAt(0)?T.pathname:"/"+T.pathname}}function gd(a){a=J(a)?ya(a):a;return a.protocol===yd.protocol&&a.host===yd.host}function xf(){this.$get=ca(R)}function zd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}
var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),x(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function Bf(){this.$get=zd}function Kc(a){function b(d,c){if(F(d)){var e={};n(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Ad);b("date",Bd);
b("filter",gg);b("json",hg);b("limitTo",ig);b("lowercase",jg);b("number",Cd);b("orderBy",Dd);b("uppercase",kg)}function gg(){return function(a,b,d){if(!Ba(a)){if(null==a)return a;throw I("filter")("notarray",a);}var c;switch(hc(b)){case "function":break;case "boolean":case "null":case "number":case "string":c=!0;case "object":b=lg(b,d,c);break;default:return a}return Array.prototype.filter.call(a,b)}}function lg(a,b,d){var c=F(a)&&"$"in a;!0===b?b=la:C(b)||(b=function(a,b){if(x(a))return!1;if(null===
a||null===b)return a===b;if(F(b)||F(a)&&!qc(a))return!1;a=N(""+a);b=N(""+b);return-1!==a.indexOf(b)});return function(e){return c&&!F(e)?La(e,a.$,b,!1):La(e,a,b,d)}}function La(a,b,d,c,e){var f=hc(a),g=hc(b);if("string"===g&&"!"===b.charAt(0))return!La(a,b.substring(1),d,c);if(K(a))return a.some(function(a){return La(a,b,d,c)});switch(f){case "object":var h;if(c){for(h in a)if("$"!==h.charAt(0)&&La(a[h],b,d,!0))return!0;return e?!1:La(a,b,d,!1)}if("object"===g){for(h in b)if(e=b[h],!C(e)&&!x(e)&&
(f="$"===h,!La(f?a:a[h],e,d,f,f)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function hc(a){return null===a?"null":typeof a}function Ad(a){var b=a.NUMBER_FORMATS;return function(a,c,e){x(c)&&(c=b.CURRENCY_SYM);x(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Ed(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Cd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Ed(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Ed(a,
b,d,c,e){if(F(a))return"";var f=0>a;a=Math.abs(a);var g=Infinity===a;if(!g&&!isFinite(a))return"";var h=a+"",k="",l=!1,m=[];g&&(k="\u221e");if(!g&&-1!==h.indexOf("e")){var s=h.match(/([\d\.]+)e(-?)(\d+)/);s&&"-"==s[2]&&s[3]>e+1?a=0:(k=h,l=!0)}if(g||l)0<e&&1>a&&(k=a.toFixed(e),a=parseFloat(k),k=k.replace(ic,c));else{g=(h.split(ic)[1]||"").length;x(e)&&(e=Math.min(Math.max(b.minFrac,g),b.maxFrac));a=+(Math.round(+(a.toString()+"e"+e)).toString()+"e"+-e);var g=(""+a).split(ic),h=g[0],g=g[1]||"",s=0,
q=b.lgSize,n=b.gSize;if(h.length>=q+n)for(s=h.length-q,l=0;l<s;l++)0===(s-l)%n&&0!==l&&(k+=d),k+=h.charAt(l);for(l=s;l<h.length;l++)0===(h.length-l)%q&&0!==l&&(k+=d),k+=h.charAt(l);for(;g.length<e;)g+="0";e&&"0"!==e&&(k+=c+g.substr(0,e))}0===a&&(f=!1);m.push(f?b.negPre:b.posPre,k,f?b.negSuf:b.posSuf);return m.join("")}function Hb(a,b,d){var c="";0>a&&(c="-",a=-a);for(a=""+a;a.length<b;)a="0"+a;d&&(a=a.substr(a.length-b));return c+a}function $(a,b,d,c){d=d||0;return function(e){e=e["get"+a]();if(0<
d||e>-d)e+=d;0===e&&-12==d&&(e=12);return Hb(e,b,c)}}function Ib(a,b){return function(d,c){var e=d["get"+a](),f=tb(b?"SHORT"+a:a);return c[f][e]}}function Fd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Gd(a){return function(b){var d=Fd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Hb(b,a)}}function jc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Bd(a){function b(a){var b;if(b=
a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=ba(b[9]+b[10]),g=ba(b[9]+b[11]));h.call(a,ba(b[1]),ba(b[2])-1,ba(b[3]));f=ba(b[4]||0)-f;g=ba(b[5]||0)-g;h=ba(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;
J(c)&&(c=mg.test(c)?ba(c):b(c));U(c)&&(c=new Date(c));if(!fa(c)||!isFinite(c.getTime()))return c;for(;d;)(l=ng.exec(d))?(h=cb(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=vc(f,c.getTimezoneOffset()),c=Qb(c,f,!0));n(h,function(b){k=og[b];g+=k?k(c,a.DATETIME_FORMATS,m):b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function hg(){return function(a,b){x(b)&&(b=2);return db(a,b)}}function ig(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):ba(b);if(isNaN(b))return a;
U(a)&&(a=a.toString());if(!K(a)&&!J(a))return a;d=!d||isNaN(d)?0:ba(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?a.slice(d,d+b):0===d?a.slice(b,a.length):a.slice(Math.max(0,d+b),d)}}function Dd(a){function b(b,d){d=d?-1:1;return b.map(function(b){var c=1,h=Ya;if(C(b))h=b;else if(J(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(h=a(b),h.constant))var k=h(),h=function(a){return a[k]}}return{get:h,descending:c*d}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;
default:return!1}}return function(a,e,f){if(null==a)return a;if(!Ba(a))throw I("orderBy")("notarray",a);K(e)||(e=[e]);0===e.length&&(e=["+"]);var g=b(e,f);g.push({get:function(){return{}},descending:f?-1:1});a=Array.prototype.map.call(a,function(a,b){return{value:a,predicateValues:g.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("string"===c)e=e.toLowerCase();else if("object"===c)a:{if("function"===typeof e.valueOf&&(e=e.valueOf(),d(e)))break a;if(qc(e)&&(e=e.toString(),
d(e)))break a;e=b}return{value:e,type:c}})}});a.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],n=0;c.type===f.type?c.value!==f.value&&(n=c.value<f.value?-1:1):n=c.type<f.type?-1:1;if(c=n*g[d].descending)break}return c});return a=a.map(function(a){return a.value})}}function Ma(a){C(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ca(a)}function Hd(a,b,d,c,e){var f=this,g=[];f.$error={};f.$$success={};f.$pending=u;f.$name=e(b.name||b.ngForm||
"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Jb;f.$rollbackViewValue=function(){n(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){n(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Sa(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];n(f.$pending,
function(b,c){f.$setValidity(c,null,a)});n(f.$error,function(b,c){f.$setValidity(c,null,a)});n(f.$$success,function(b,c){f.$setValidity(c,null,a)});ab(g,a);a.$$parentForm=Jb};Id({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(ab(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Wa);c.addClass(a,Kb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){c.setClass(a,
Wa,Kb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;n(g,function(a){a.$setPristine()})};f.$setUntouched=function(){n(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function kc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function kb(a,b,d,c,e,f){var g=N(b[0].type);if(!e.android){var h=!1;b.on("compositionstart",function(a){h=!0});b.on("compositionend",function(){h=!1;
k()})}var k=function(a){l&&(f.defer.cancel(l),l=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=W(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",k);else{var l,m=function(a,b,c){l||(l=f.defer(function(){l=null;b&&b.value===c||k(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",m)}b.on("change",k);
c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Lb(a,b){return function(d,c){var e,f;if(fa(d))return d;if(J(d)){'"'==d.charAt(0)&&'"'==d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(pg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},
n(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function lb(a,b,d,c){return function(e,f,g,h,k,l,m){function s(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function q(a){return y(a)&&!fa(a)?d(a)||u:a}Jd(e,f,g,h);kb(e,f,g,h,k,l);var n=h&&h.$options&&h.$options.timezone,r;h.$$parserName=a;h.$parsers.push(function(a){return h.$isEmpty(a)?null:b.test(a)?(a=d(a,r),n&&(a=Qb(a,n)),a):u});h.$formatters.push(function(a){if(a&&!fa(a))throw mb("datefmt",
a);if(s(a))return(r=a)&&n&&(r=Qb(r,n,!0)),m("date")(a,c,n);r=null;return""});if(y(g.min)||g.ngMin){var t;h.$validators.min=function(a){return!s(a)||x(t)||d(a)>=t};g.$observe("min",function(a){t=q(a);h.$validate()})}if(y(g.max)||g.ngMax){var p;h.$validators.max=function(a){return!s(a)||x(p)||d(a)<=p};g.$observe("max",function(a){p=q(a);h.$validate()})}}}function Jd(a,b,d,c){(c.$$hasNativeValidators=F(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?
u:a})}function Kd(a,b,d,c,e){if(y(c)){a=a(c);if(!a.constant)throw mb("constexpr",d,c);return a(b)}return e}function lc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return K(a)?(n(a,function(a){b=b.concat(e(a))}),b):J(a)?a.split(" "):F(a)?(n(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function k(a,
b){var c=g.data("$classCounts")||V(),d=[];n(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function l(a){if(!0===b||f.$index%2===b){var l=e(a||[]);if(!m){var n=k(l,1);h.$addClass(n)}else if(!la(a,m)){var r=e(m),n=c(l,r),l=c(r,l),n=k(n,1),l=k(l,-1);n&&n.length&&d.addClass(g,n);l&&l.length&&d.removeClass(g,l)}}m=da(a)}var m;f.$watch(h[a],l,!0);h.$observe("class",function(b){l(f.$eval(h[a]))});"ngClass"!==a&&f.$watch("$index",function(c,
d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[a]));g===b?(g=k(l,1),h.$addClass(g)):(g=k(l,-1),h.$removeClass(g))}})}}}]}function Id(a){function b(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+zc(a,"-"):"";b(nb+a,!0===c);b(Ld+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[Ld]=!(f[nb]=e.hasClass(nb));c.$setValidity=function(a,e,f){x(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&h(c.$pending,a,f),Md(c.$pending)&&
(c.$pending=u));$a(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,a,f),h(c.$$success,a,f));c.$pending?(b(Nd,!0),c.$valid=c.$invalid=u,d("",null)):(b(Nd,!1),c.$valid=Md(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?u:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function Md(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var qg=/^\/(.+)\/([a-z]*)$/,N=function(a){return J(a)?a.toLowerCase():
a},ua=Object.prototype.hasOwnProperty,tb=function(a){return J(a)?a.toUpperCase():a},Ja,A,xa,va=[].slice,Uf=[].splice,rg=[].push,wa=Object.prototype.toString,rc=Object.getPrototypeOf,Ca=I("ng"),ga=R.angular||(R.angular={}),Sb,ob=0;Ja=X.documentMode;v.$inject=[];Ya.$inject=[];var K=Array.isArray,Xd=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,W=function(a){return J(a)?a.trim():a},wd=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,
"\\x08")},Da=function(){if(!y(Da.rules)){var a=X.querySelector("[ng-csp]")||X.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Da.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Da;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Da.rules},qb=function(){if(y(qb.name_))return qb.name_;var a,b,d=Pa.length,c,e;for(b=0;b<d;++b)if(c=Pa[b],a=X.querySelector("["+
c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return qb.name_=e},Pa=["ng-","data-ng-","ng:","x-ng-"],de=/[A-Z]/g,Ac=!1,Oa=3,he={full:"1.5.0-beta.2",major:1,minor:5,dot:0,codeName:"effective-delegation"};D.expando="ng339";var hb=D.cache={},Hf=1;D._data=function(a){return this.cache[a[this.expando]]||{}};var Cf=/([\:\-\_]+(.))/g,Df=/^moz([A-Z])/,xb={mouseleave:"mouseout",mouseenter:"mouseover"},Ub=I("jqLite"),Gf=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Tb=/<|&#?\w+;/,Ef=/<([\w:-]+)/,Ff=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
ia={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option;ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead;ia.th=ia.td;var Mf=Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Qa=D.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===
X.readyState?setTimeout(b):(this.on("DOMContentLoaded",b),D(R).on("load",b))},toString:function(){var a=[];n(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?A(this[a]):A(this[this.length+a])},length:0,push:rg,sort:[].sort,splice:[].splice},Cb={};n("multiple selected checked disabled readOnly required open".split(" "),function(a){Cb[N(a)]=a});var Sc={};n("input select option textarea button form details".split(" "),function(a){Sc[a]=!0});var $c={ngMinlength:"minlength",
ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};n({data:Wb,removeData:gb,hasData:function(a){for(var b in hb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)gb(a[b])}},function(a,b){D[b]=a});n({data:Wb,inheritedData:Bb,scope:function(a){return A.data(a,"$scope")||Bb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return A.data(a,"$isolateScope")||A.data(a,"$isolateScopeNoTemplate")},controller:Pc,injector:function(a){return Bb(a,
"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:yb,css:function(a,b,d){b=fb(b);if(y(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Oa&&2!==c&&8!==c)if(c=N(b),Cb[c])if(y(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||v).specified?c:u;else if(y(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?u:a},prop:function(a,b,d){if(y(d))a[b]=d;else return a[b]},
text:function(){function a(a,d){if(x(d)){var c=a.nodeType;return 1===c||c===Oa?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(x(b)){if(a.multiple&&"select"===pa(a)){var d=[];n(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(x(b))return a.innerHTML;vb(a,!0);a.innerHTML=b},empty:Qc},function(a,b){D.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==Qc&&x(2==a.length&&a!==yb&&a!==Pc?
b:c)){if(F(b)){for(e=0;e<g;e++)if(a===Wb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=x(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});n({removeData:gb,on:function(a,b,d,c){if(y(c))throw Ub("onargs");if(Lc(a)){c=wb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=Jf(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=c,"$destroy"===
b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],xb[b]?(h(xb[b],Lf),h(b,u,!0)):h(b)}},off:Oc,one:function(a,b,d){a=A(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;vb(a);n(new D(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];n(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=
a.nodeType;if(1===d||11===d){b=new D(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;n(new D(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){b=A(b).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)},remove:Xb,detach:function(a){Xb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new D(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:Ab,removeClass:zb,
toggleClass:function(a,b,d){b&&n(b.split(" "),function(b){var e=d;x(e)&&(e=!yb(a,b));(e?Ab:zb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Vb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=wb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},
stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:v,type:f,target:a},b.type&&(c=P(c,b)),b=da(g),e=d?[c].concat(d):[c],n(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){D.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)x(f)?(f=a(this[g],b,c,e),y(f)&&(f=A(f))):Nc(f,a(this[g],b,c,e));return y(f)?f:this};D.prototype.bind=D.prototype.on;
D.prototype.unbind=D.prototype.off});Ta.prototype={put:function(a,b){this[Ea(a,this.nextUid)]=b},get:function(a){return this[Ea(a,this.nextUid)]},remove:function(a){var b=this[a=Ea(a,this.nextUid)];delete this[a];return b}};var Af=[function(){this.$get=[function(){return Ta}]}],Of=/^([^\(]+?)=>/,Pf=/^[^\(]*\(\s*([^\)]*)\)/m,sg=/,/,tg=/^\s*(_?)(\S+?)\1\s*$/,Nf=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Fa=I("$injector");eb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];
if(a.length){if(b)throw J(d)&&d||(d=a.name||Qf(a)),Fa("strictdi",d);b=Tc(a);n(b[1].split(sg),function(a){a.replace(tg,function(a,b,d){c.push(d)})})}a.$inject=c}}else K(a)?(b=a.length-1,Ra(a[b],"fn"),c=a.slice(0,b)):Ra(a,"fn",!0);return c};var Od=I("$animate"),We=function(){this.$get=["$q","$$rAF",function(a,b){function d(){}d.all=v;d.chain=v;d.prototype={end:v,cancel:v,resume:v,pause:v,complete:v,then:function(c,d){return a(function(a){b(function(){a()})}).then(c,d)}};return d}]},Ve=function(){var a=
new Ta,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=J(b)?b.split(" "):K(b)?b:[],n(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){n(b,function(b){var c=a.get(b);if(c){var d=Rf(b.attr("class")),e="",f="";n(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});n(b,function(a){e&&Ab(a,e);f&&zb(a,f)});a.remove(b)}});b.length=0}return{enabled:v,on:v,off:v,pin:v,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);
k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(f);return new d}}}]},Te=["$provide",function(a){var b=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Od("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=
a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Od("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=
f&&A(f);g=g&&A(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ha(h))},move:function(e,f,g,h){f=f&&A(f);g=g&&A(g);f=f||g.parent();b(e,f,g);return a.push(e,"move",Ha(h))},leave:function(b,c){return a.push(b,"leave",Ha(c),function(){b.remove()})},addClass:function(b,c,g){g=Ha(g);g.addClass=ib(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ha(g);g.removeClass=ib(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ha(h);h.addClass=ib(h.addClass,
c);h.removeClass=ib(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ha(k);k.from=k.from?P(k.from,c):c;k.to=k.to?P(k.to,g):g;k.tempClasses=ib(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],Ue=function(){this.$get=["$$rAF","$q",function(a,b){var d=function(){};d.prototype={done:function(a){this.defer&&this.defer[!0===a?"reject":"resolve"]()},end:function(){this.done()},cancel:function(){this.done(!0)},getPromise:function(){this.defer||(this.defer=
b.defer());return this.defer.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)}};return function(b,e){function f(){a(function(){e.addClass&&(b.addClass(e.addClass),e.addClass=null);e.removeClass&&(b.removeClass(e.removeClass),e.removeClass=null);e.to&&(b.css(e.to),e.to=null);g||h.done();g=!0});return h}e.cleanupStyles&&(e.from=e.to=null);e.from&&(b.css(e.from),e.from=
null);var g,h=new d;return{start:f,end:f}}}]},ha=I("$compile");Dc.$inject=["$provide","$$sanitizeUriProvider"];var Vc=/^((?:x|data)[\:\-_])/i,Vf=I("$controller"),ad=/^(\S+)(\s+as\s+(\w+))?$/,bf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof A&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},bd="application/json",ac={"Content-Type":bd+";charset=utf-8"},Xf=/^\[|^\{(?!\{)/,Yf={"[":/]$/,"{":/}$/},Wf=/^\)\]\}',?\n/,ug=I("$http"),fd=function(a){return function(){throw ug("legacy",
a);}},Ka=ga.$interpolateMinErr=I("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,b){return Ka("interr",a,b.toString())};var vg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,$f={http:80,https:443,ftp:21},Eb=I("$location"),wg={$$html5:!1,$$replace:!1,absUrl:Fb("$$absUrl"),url:function(a){if(x(a))return this.$$url;var b=vg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Fb("$$protocol"),
host:Fb("$$host"),port:Fb("$$port"),path:kd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(J(a)||U(a))a=a.toString(),this.$$search=xc(a);else if(F(a))a=bb(a,{}),n(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Eb("isrcharg");break;default:x(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:kd("$$hash",function(a){return null!==
a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};n([jd,dc,cc],function(a){a.prototype=Object.create(wg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==cc||!this.$$html5)throw Eb("nostate");this.$$state=x(b)?null:b;return this}});var ea=I("$parse"),ag=Function.prototype.call,bg=Function.prototype.apply,cg=Function.prototype.bind,Mb=V();n("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Mb[a]=!0});var xg={n:"\n",f:"\f",r:"\r",
t:"\t",v:"\v","'":"'",'"':'"'},fc=function(a){this.options=a};fc.prototype={constructor:fc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;
else{var b=a+this.peek(),d=b+this.peek(2),c=Mb[b],e=Mb[d];Mb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||
"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=y(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw ea("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=N(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();
if("e"==d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var b=this.text.charAt(this.index);if(!this.isIdent(b)&&!this.isNumber(b))break;this.index++}this.tokens.push({index:a,
text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=xg[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,
value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var r=function(a,b){this.lexer=a;this.options=b};r.Program="Program";r.ExpressionStatement="ExpressionStatement";r.AssignmentExpression="AssignmentExpression";r.ConditionalExpression="ConditionalExpression";r.LogicalExpression="LogicalExpression";r.BinaryExpression="BinaryExpression";r.UnaryExpression="UnaryExpression";r.CallExpression="CallExpression";r.MemberExpression="MemberExpression";r.Identifier="Identifier";r.Literal=
"Literal";r.ArrayExpression="ArrayExpression";r.Property="Property";r.ObjectExpression="ObjectExpression";r.ThisExpression="ThisExpression";r.NGValueParameter="NGValueParameter";r.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:r.Program,
body:a}},expressionStatement:function(){return{type:r.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:r.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?
(d=this.expression(),{type:r.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:r.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:r.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:r.BinaryExpression,
operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:r.BinaryExpression,operator:b.text,
left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:r.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=bb(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():
this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:r.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:r.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:r.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:r.CallExpression,callee:this.identifier(),
arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:r.Identifier,name:a.text}},constant:function(){return{type:r.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;
a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:r.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:r.Property,kind:"init"};this.peek().constant?b.key=this.constant():this.peek().identifier?b.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");b.value=this.expression();a.push(b)}while(this.expect(","))}this.consume("}");return{type:r.ObjectExpression,properties:a}},
throwError:function(a,b){throw ea("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw ea("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw ea("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];
var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},constants:{"true":{type:r.Literal,value:!0},"false":{type:r.Literal,value:!1},"null":{type:r.Literal,value:null},undefined:{type:r.Literal,value:u},"this":{type:r.ThisExpression}}};td.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],
body:[],own:{}},inputs:[]};S(c,d.$filter);var e="",f;this.stage="assign";if(f=rd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign","s,v,l");f=pd(c.body);d.stage="inputs";n(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+" "+this.STRICT+
'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",e))(this.$filter,Va,za,md,ld,nd,dg,od,a);this.state=this.stage=u;e.literal=sd(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;n(b,function(b){a.push("var "+b+"="+d.generateFunction(b,
"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;n(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,
d,c,e,f){var g,h,k=this,l,m;c=c||v;if(!f&&y(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case r.Program:n(a.body,function(b,c){k.recurse(b.expression,u,u,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case r.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;case r.UnaryExpression:this.recurse(a.argument,u,u,function(a){h=a});m=a.operator+"("+this.ifDefined(h,
0)+")";this.assign(b,m);c(m);break;case r.BinaryExpression:this.recurse(a.left,u,u,function(a){g=a});this.recurse(a.right,u,u,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case r.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case r.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,
b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case r.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Va(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",
a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Gb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case r.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,u,function(){k.if_(k.notNull(g),function(){if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.ensureSafeObject(k.computedMember(g,
h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Va(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Gb(a.property.name))m=k.ensureSafeObject(m);k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(b,"undefined")});c(b)},!!e);break;case r.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],n(a.arguments,
function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);n(a.arguments,function(a){k.recurse(a,k.nextId(),u,function(a){l.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m)},
function(){k.assign(b,"undefined")});c(b)}));break;case r.AssignmentExpression:h=this.nextId();g={};if(!qd(a.left))throw ea("lval");this.recurse(a.left,u,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case r.ArrayExpression:l=[];n(a.elements,function(a){k.recurse(a,k.nextId(),u,function(a){l.push(a)})});
m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case r.ObjectExpression:l=[];n(a.properties,function(a){k.recurse(a.value,k.nextId(),u,function(b){l.push(k.escape(a.key.type===r.Identifier?a.key.name:""+a.key.value)+":"+b)})});m="{"+l.join(",")+"}";this.assign(b,m);c(m);break;case r.ThisExpression:this.assign(b,"s");c("s");break;case r.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+
this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,
"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){return a+"."+b},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},
addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+",text)")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+
a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(J(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(U(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===
typeof a)return"undefined";throw ea("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};ud.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;S(c,d.$filter);var e,f;if(e=rd(c))f=this.recurse(e);e=pd(c.body);var g;e&&(g=[],n(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];n(c.body,function(a){h.push(d.recurse(a.expression))});
e=0===c.body.length?function(){}:1===c.body.length?h[0]:function(a,b){var c;n(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=sd(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case r.Literal:return this.value(a.value,b);case r.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case r.BinaryExpression:return c=this.recurse(a.left),
e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case r.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case r.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case r.Identifier:return Va(a.name,f.expression),f.identifier(a.name,f.expensiveChecks||Gb(a.name),b,d,f.expression);case r.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Va(a.property.name,
f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case r.CallExpression:return g=[],n(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var n=[],q=0;q<g.length;++q)n.push(g[q](a,c,d,f));a=e.apply(u,n,f);return b?{context:u,name:u,value:a}:a}:function(a,
c,d,m){var n=e(a,c,d,m),q;if(null!=n.value){za(n.context,f.expression);md(n.value,f.expression);q=[];for(var r=0;r<g.length;++r)q.push(za(g[r](a,c,d,m),f.expression));q=za(n.value.apply(n.context,q),f.expression)}return b?{value:q}:q};case r.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,m){var n=c(a,d,g,m);a=e(a,d,g,m);za(n.value,f.expression);nd(n.context);n.context[n.name]=a;return b?{value:a}:a};case r.ArrayExpression:return g=[],n(a.elements,function(a){g.push(f.recurse(a))}),
function(a,c,d,e){for(var f=[],n=0;n<g.length;++n)f.push(g[n](a,c,d,e));return b?{value:f}:f};case r.ObjectExpression:return g=[],n(a.properties,function(a){g.push({key:a.key.type===r.Identifier?a.key.name:""+a.key.value,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},n=0;n<g.length;++n)f[g[n].key]=g[n].value(a,c,d,e);return b?{value:f}:f};case r.ThisExpression:return function(a){return b?{value:a}:a};case r.NGValueParameter:return function(a,c,d,e){return b?{value:d}:d}}},"unary+":function(a,
b){return function(d,c,e,f){d=a(d,c,e,f);d=y(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=y(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=od(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(y(h)?h:0)-(y(c)?c:0);return d?{value:h}:h}},"binary*":function(a,
b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,
d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:u,name:u,value:a}:a}},identifier:function(a,b,d,c,e){return function(f,g,h,k){f=
g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:u;b&&za(g,e);return d?{context:f,name:a,value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),m,n;null!=l&&(m=b(f,g,h,k),m=ld(m),Va(m,e),c&&1!==c&&l&&!l[m]&&(l[m]={}),n=l[m],za(n,e));return d?{context:l,name:m,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&g&&!g[b]&&(g[b]={});h=null!=g?g[b]:u;(d||Gb(b))&&za(h,f);return c?{context:g,name:b,value:h}:h}},inputs:function(a,
b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var gc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new r(this.lexer);this.astCompiler=d.csp?new ud(this.ast,b):new td(this.ast,b)};gc.prototype={constructor:gc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};V();V();var eg=Object.prototype.valueOf,Aa=I("$sce"),ka={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ha=I("$compile"),T=X.createElement("a"),yd=ya(R.location.href);
zd.$inject=["$document"];Kc.$inject=["$provide"];Ad.$inject=["$locale"];Cd.$inject=["$locale"];var ic=".",og={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:Ib("Month"),MMM:Ib("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:Ib("Day"),EEE:Ib("Day",!0),a:function(a,b){return 12>a.getHours()?
b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Hb(Math[0<a?"floor":"ceil"](a/60),2)+Hb(Math.abs(a%60),2))},ww:Gd(2),w:Gd(1),G:jc,GG:jc,GGG:jc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},ng=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,mg=/^\-?\d+$/;Bd.$inject=["$locale"];var jg=ca(N),kg=ca(tb);Dd.$inject=["$parse"];var je=ca({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,
b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===wa.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),ub={};n(Cb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=ra("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});ub[c]=function(){return{restrict:"A",priority:100,link:e}}}});n($c,function(a,b){ub[b]=function(){return{priority:100,link:function(a,
c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(qg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});n(["src","srcset","href"],function(a){var b=ra("ng-"+a);ub[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===wa.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ja&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});
var Jb={$addControl:v,$$renameControl:function(a,b){a.$name=b},$removeControl:v,$setValidity:v,$setDirty:v,$setPristine:v,$setSubmitted:v};Hd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Pd=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||v}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Hd,compile:function(d,f){d.addClass(Wa).addClass(nb);var g=f.name?"name":a&&f.ngForm?"ngForm":
!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var q=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",q,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",q,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var r=g?c(n.$name):v;g&&(r(a,n),e.$observe(g,function(b){n.$name!==b&&(r(a,u),n.$$parentForm.$$renameControl(n,b),r=c(n.$name),r(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);
r(a,u);P(n,Jb)})}}}}}]},ke=Pd(),xe=Pd(!0),pg=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,yg=/^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/,zg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Ag=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Qd=/^(\d{4})-(\d{2})-(\d{2})$/,Rd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,mc=/^(\d{4})-W(\d\d)$/,Sd=/^(\d{4})-(\d\d)$/,
Td=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Ud={text:function(a,b,d,c,e,f){kb(a,b,d,c,e,f);kc(c)},date:lb("date",Qd,Lb(Qd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":lb("datetimelocal",Rd,Lb(Rd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:lb("time",Td,Lb(Td,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:lb("week",mc,function(a,b){if(fa(a))return a;if(J(a)){mc.lastIndex=0;var d=mc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Fd(c),e=7*(e-1);b&&(d=b.getHours(),f=
b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:lb("month",Sd,Lb(Sd,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Jd(a,b,d,c);kb(a,b,d,c,e,f);c.$$parserName="number";c.$parsers.push(function(a){return c.$isEmpty(a)?null:Ag.test(a)?parseFloat(a):u});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!U(a))throw mb("numfmt",a);a=a.toString()}return a});if(y(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||
x(g)||a>=g};d.$observe("min",function(a){y(a)&&!U(a)&&(a=parseFloat(a,10));g=U(a)&&!isNaN(a)?a:u;c.$validate()})}if(y(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||x(h)||a<=h};d.$observe("max",function(a){y(a)&&!U(a)&&(a=parseFloat(a,10));h=U(a)&&!isNaN(a)?a:u;c.$validate()})}},url:function(a,b,d,c,e,f){kb(a,b,d,c,e,f);kc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||yg.test(d)}},email:function(a,b,d,c,e,f){kb(a,b,d,c,e,f);kc(c);
c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||zg.test(d)}},radio:function(a,b,d,c){x(d.name)&&b.attr("name",++ob);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Kd(h,a,"ngTrueValue",d.ngTrueValue,!0),l=Kd(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&
a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return la(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:v,button:v,submit:v,reset:v,file:v},Ec=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Ud[N(g.type)]||Ud.text)(e,f,g,h[0],b,a,d,c)}}}}],Bg=/^(true|false|\d+)$/,Pe=function(){return{restrict:"A",priority:100,compile:function(a,
b){return Bg.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},pe=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=x(a)?"":a})}}}}],re=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));
b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=x(a)?"":a})}}}}],qe=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){c.html(a.getTrustedHtml(f(b))||"")})}}}}],Oe=ca({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
se=lc("",!0),ue=lc("Odd",0),te=lc("Even",1),ve=Ma({compile:function(a,b){b.$set("ngCloak",u);a.removeClass("ng-cloak")}}),we=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Jc={},Cg={blur:!0,focus:!0};n("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=ra("ng-"+a);Jc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=
d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Cg[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var ze=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(b,d,c,e,f){var g,h,k;b.$watch(c.ngIf,function(b){b?h||f(function(b,e){h=e;b[b.length++]=X.createComment(" end ngIf: "+c.ngIf+" ");g={clone:b};a.enter(b,d.parent(),d)}):(k&&(k.remove(),k=null),h&&(h.$destroy(),h=null),g&&(k=
sb(g.clone),a.leave(k).then(function(){k=null}),g=null))})}}}],Ae=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ga.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,q){var r=0,u,t,p,z=function(){t&&(t.remove(),t=null);u&&(u.$destroy(),u=null);p&&(d.leave(p).then(function(){t=null}),t=p,p=null)};c.$watch(f,function(f){var m=function(){!y(h)||h&&!c.$eval(h)||
b()},t=++r;f?(a(f,!0).then(function(a){if(t===r){var b=c.$new();n.template=a;a=q(b,function(a){z();d.enter(a,null,e).then(m)});u=b;p=a;u.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){t===r&&(z(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(z(),n.template=null)})}}}}],Re=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){/SVG/.test(d[0].toString())?(d.empty(),a(Mc(e.template,X).childNodes)(b,function(a){d.append(a)},
{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],Be=Ma({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),Ne=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?W(e):e;c.$parsers.push(function(a){if(!x(a)){var b=[];a&&n(a.split(g),function(a){a&&b.push(f?W(a):a)});return b}});c.$formatters.push(function(a){return K(a)?a.join(e):u});c.$isEmpty=function(a){return!a||
!a.length}}}},nb="ng-valid",Ld="ng-invalid",Wa="ng-pristine",Kb="ng-dirty",Nd="ng-pending",mb=I("ngModel"),Dg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=u;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;
this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=u;this.$name=l(d.name||"",!1)(a);this.$$parentForm=Jb;var m=e(d.ngModel),s=m.assign,q=m,r=s,A=null,t,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");q=function(a){var c=m(a);C(c)&&(c=b(a));return c};r=function(a,b){C(m(a))?f(a,{$$$p:p.$modelValue}):s(a,p.$modelValue)}}else if(!m.assign)throw mb("nonassign",d.ngModel,qa(c));};this.$render=v;this.$isEmpty=
function(a){return x(a)||""===a||null===a||a!==a};this.$$updateEmptyClasses=function(a){p.$isEmpty(a)?(f.removeClass(c,"ng-not-empty"),f.addClass(c,"ng-empty")):(f.removeClass(c,"ng-empty"),f.addClass(c,"ng-not-empty"))};var z=0;Id({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;f.removeClass(c,Kb);f.addClass(c,Wa)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;f.removeClass(c,Wa);f.addClass(c,
Kb);p.$$parentForm.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=!0;p.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(A);p.$viewValue=p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!U(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,b=p.$valid,c=p.$modelValue,d=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,
p.$$lastCommittedViewValue,function(e){d||b===e||(p.$modelValue=e?a:u,p.$modelValue!==c&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,b,c){function d(){var c=!0;n(p.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(n(p.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;n(p.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!C(h.then))throw mb("$asyncValidators",h);f(g,u);c.push(h.then(function(){f(g,!0)},function(a){d=!1;f(g,!1)}))});c.length?
k.all(c).then(function(){g(d)},v):g(!0)}function f(a,b){h===z&&p.$setValidity(a,b)}function g(a){h===z&&c(a)}z++;var h=z;(function(){var a=p.$$parserName||"parse";if(x(t))f(a,null);else return t||(n(p.$validators,function(a,b){f(b,null)}),n(p.$asyncValidators,function(a,b){f(b,null)})),f(a,t),t;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=p.$viewValue;g.cancel(A);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$updateEmptyClasses(a),p.$$lastCommittedViewValue=
a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=p.$$lastCommittedViewValue;if(t=x(b)?u:!0)for(var c=0;c<p.$parsers.length;c++)if(b=p.$parsers[c](b),x(b)){t=!1;break}U(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=q(a));var d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=b;e&&(p.$modelValue=b,p.$modelValue!==d&&p.$$writeModelToScope());p.$$runValidators(b,p.$$lastCommittedViewValue,function(a){e||(p.$modelValue=a?b:
u,p.$modelValue!==d&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){r(a,p.$modelValue);n(p.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=p.$options;d&&y(d.debounce)&&(d=d.debounce,U(d)?c=d:U(d[b])?c=d[b]:U(d["default"])&&(c=d["default"]));g.cancel(A);c?A=g(function(){p.$commitViewValue()},c):h.$$phase?
p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var b=q(a);if(b!==p.$modelValue&&(p.$modelValue===p.$modelValue||b===b)){p.$modelValue=p.$$rawModelValue=b;t=u;for(var c=p.$formatters,d=c.length,e=b;d--;)e=c[d](e);p.$viewValue!==e&&(p.$$updateEmptyClasses(e),p.$viewValue=p.$$lastCommittedViewValue=e,p.$render(),p.$$runValidators(b,e,v))}return b})}],Me=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Dg,priority:1,
compile:function(b){b.addClass(Wa).addClass("ng-untouched").addClass(nb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(c){g.$touched||
(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],Eg=/(\s+|^)default(\s+|$)/,Qe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var d=this;this.$options=bb(a.$eval(b.ngModelOptions));y(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=W(this.$options.updateOn.replace(Eg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ce=Ma({terminal:!0,priority:1E3}),Fg=I("ngOptions"),Gg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
Ke=["$compile","$parse",function(a,b){function d(a,c,d){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function l(a){var b;if(!q&&Ba(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var m=a.match(Gg);if(!m)throw Fg("iexp",a,qa(c));var n=m[5]||m[7],q=m[6];a=/ as /.test(m[0])&&m[1];var r=m[9];c=b(m[2]?m[1]:n);var u=a&&b(a)||c,t=r&&b(r),p=r?function(a,b){return t(d,b)}:function(a){return Ea(a)},z=function(a,
b){return p(a,A(a,b))},w=b(m[2]||m[1]),v=b(m[3]||""),x=b(m[4]||""),G=b(m[8]),y={},A=q?function(a,b){y[q]=b;y[n]=a;return y}:function(a){y[n]=a;return y};return{trackBy:r,getTrackByValue:z,getWatchables:b(G,function(a){var b=[];a=a||[];for(var c=l(a),e=c.length,f=0;f<e;f++){var g=a===c?f:c[f],k=A(a[g],g),g=p(a[g],k);b.push(g);if(m[2]||m[1])g=w(d,k),b.push(g);m[4]&&(k=x(d,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},c=G(d)||[],f=l(c),g=f.length,m=0;m<g;m++){var n=c===f?m:f[m],q=
A(c[n],n),s=u(d,q),n=p(s,q),t=w(d,q),y=v(d,q),q=x(d,q),s=new e(n,s,t,y,q);a.push(s);b[n]=s}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[z(a)]},getViewValueFromOption:function(a){return r?ga.copy(a.viewValue):a.viewValue}}}}}var c=X.createElement("option"),e=X.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=v},post:function(b,g,h,k){function l(a,b){a.element=b;b.disabled=a.disabled;
a.label!==b.label&&(b.label=a.label,b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function m(a,b,c,d){b&&N(b.nodeName)===c?c=b:(c=d.cloneNode(!1),b?a.insertBefore(c,b):a.appendChild(c));return c}function s(a){for(var b;a;)b=a.nextSibling,Xb(a),a=b}function q(a){var b=p&&p[0],c=G&&G[0];if(b||c)for(;a&&(a===b||a===c||8===a.nodeType||""===a.value);)a=a.nextSibling;return a}function r(){var a=E&&u.readValue();E=C.getOptions();var b={},d=g[0].firstChild;x&&g.prepend(p);d=q(d);E.items.forEach(function(a){var f,
h;y(a.group)?(f=b[a.group],f||(f=m(g[0],d,"optgroup",e),d=f.nextSibling,f.label=a.group,f=b[a.group]={groupElement:f,currentOptionElement:f.firstChild}),h=m(f.groupElement,f.currentOptionElement,"option",c),l(a,h),f.currentOptionElement=h.nextSibling):(h=m(g[0],d,"option",c),l(a,h),d=h.nextSibling)});Object.keys(b).forEach(function(a){s(b[a].currentOptionElement)});s(d);t.$render();if(!t.$isEmpty(a)){var f=u.readValue();(C.trackBy?la(a,f):a===f)||(t.$setViewValue(f),t.$render())}}var u=k[0],t=k[1];
k=h.multiple;for(var p,z=0,w=g.children(),v=w.length;z<v;z++)if(""===w[z].value){p=w.eq(z);break}var x=!!p,G=A(c.cloneNode(!1));G.val("?");var E,C=d(h.ngOptions,g,b);k?(t.$isEmpty=function(a){return!a||0===a.length},u.writeValue=function(a){E.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){(a=E.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},u.readValue=function(){var a=g.val()||[],b=[];n(a,function(a){(a=E.selectValueMap[a])&&!a.disabled&&b.push(E.getViewValueFromOption(a))});
return b},C.trackBy&&b.$watchCollection(function(){if(K(t.$viewValue))return t.$viewValue.map(function(a){return C.getTrackByValue(a)})},function(){t.$render()})):(u.writeValue=function(a){var b=E.getOptionFromViewValue(a);b&&!b.disabled?g[0].value!==b.selectValue&&(G.remove(),x||p.remove(),g[0].value=b.selectValue,b.element.selected=!0,b.element.setAttribute("selected","selected")):null===a||x?(G.remove(),x||g.prepend(p),g.val(""),p.prop("selected",!0),p.attr("selected",!0)):(x||p.remove(),g.prepend(G),
g.val("?"),G.prop("selected",!0),G.attr("selected",!0))},u.readValue=function(){var a=E.selectValueMap[g.val()];return a&&!a.disabled?(x||p.remove(),G.remove(),E.getViewValueFromOption(a)):null},C.trackBy&&b.$watch(function(){return C.getTrackByValue(t.$viewValue)},function(){t.$render()}));x?(p.remove(),a(p)(b),p.removeClass("ng-scope")):p=A(c.cloneNode(!1));r();b.$watchCollection(C.getWatchables,r)}}}}],De=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,
g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),s=h.offset||0,q=f.$eval(m)||{},r={},u=b.startSymbol(),t=b.endSymbol(),p=u+l+"-"+s+t,z=ga.noop,w;n(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+N(c[2]),q[c]=g.attr(h.$attr[b]))});n(q,function(a,d){r[d]=b(a.replace(c,p))});f.$watch(l,function(b){var c=parseFloat(b),e=isNaN(c);e||c in q||(c=a.pluralCat(c-s));c===w||e&&U(w)&&isNaN(w)||(z(),e=r[c],x(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+
m),z=v,k()):z=f.$watch(e,k),w=c)})}}}],Ee=["$parse","$animate",function(a,b){var d=I("ngRepeat"),c=function(a,b,c,d,k,l,m){a[c]=d;k&&(a[k]=l);a.$index=b;a.$first=0===b;a.$last=b===m-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(e,f){var g=f.ngRepeat,h=X.createComment(" end ngRepeat: "+g+" "),k=g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!k)throw d("iexp",g);var l=k[1],m=k[2],s=k[3],q=k[4],k=l.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",l);var r=k[3]||k[1],x=k[2];if(s&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(s)))throw d("badident",s);var t,p,z,w,v={$id:Ea};q?t=a(q):(z=function(a,b){return Ea(b)},w=function(a){return a});return function(a,e,f,k,l){t&&(p=function(b,c,d){x&&(v[x]=b);v[r]=c;v.$index=
d;return t(a,v)});var q=V();a.$watchCollection(m,function(f){var k,m,t=e[0],v,y=V(),C,E,I,F,J,D,K;s&&(a[s]=f);if(Ba(f))J=f,m=p||z;else for(K in m=p||w,J=[],f)ua.call(f,K)&&"$"!==K.charAt(0)&&J.push(K);C=J.length;K=Array(C);for(k=0;k<C;k++)if(E=f===J?k:J[k],I=f[E],F=m(E,I,k),q[F])D=q[F],delete q[F],y[F]=D,K[k]=D;else{if(y[F])throw n(K,function(a){a&&a.scope&&(q[a.id]=a)}),d("dupes",g,F,I);K[k]={id:F,scope:u,clone:u};y[F]=!0}for(v in q){D=q[v];F=sb(D.clone);b.leave(F);if(F[0].parentNode)for(k=0,m=F.length;k<
m;k++)F[k].$$NG_REMOVED=!0;D.scope.$destroy()}for(k=0;k<C;k++)if(E=f===J?k:J[k],I=f[E],D=K[k],D.scope){v=t;do v=v.nextSibling;while(v&&v.$$NG_REMOVED);D.clone[0]!=v&&b.move(sb(D.clone),null,A(t));t=D.clone[D.clone.length-1];c(D.scope,k,r,I,x,E,C)}else l(function(a,d){D.scope=d;var e=h.cloneNode(!1);a[a.length++]=e;b.enter(a,null,A(t));t=e;D.clone=a;y[D.id]=D;c(D.scope,k,r,I,x,E,C)});q=y})}}}}],Fe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?
"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],ye=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ge=Ma(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&n(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),He=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(b,
d,c,e){var f=[],g=[],h=[],k=[],l=function(a,b){return function(){a.splice(b,1)}};b.$watch(c.ngSwitch||c.on,function(b){var c,d;c=0;for(d=h.length;c<d;++c)a.cancel(h[c]);c=h.length=0;for(d=k.length;c<d;++c){var r=sb(g[c].clone);k[c].$destroy();(h[c]=a.leave(r)).then(l(h,c))}g.length=0;k.length=0;(f=e.cases["!"+b]||e.cases["?"])&&n(f,function(b){b.transclude(function(c,d){k.push(d);var e=b.element;c[c.length++]=X.createComment(" end ngSwitchWhen: ");g.push({clone:c});a.enter(c,e.parent(),e)})})})}}}],
Ie=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),Je=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),Hg=I("ngTransclude"),Le=Ma({restrict:"EAC",link:function(a,b,d,c,e){if(!e)throw Hg("orphan",qa(b));
e(function(a){b.empty();b.append(a)},null,d.ngTransclude||d.ngTranscludeSlot)}}),le=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Ig={$setViewValue:v,$render:v},Jg=["$element","$scope","$attrs",function(a,b,d){var c=this,e=new Ta;c.ngModelCtrl=Ig;c.unknownOption=A(X.createElement("option"));c.renderUnknownOption=function(b){b="? "+Ea(b)+" ?";c.unknownOption.val(b);a.prepend(c.unknownOption);a.val(b)};b.$on("$destroy",
function(){c.renderUnknownOption=v});c.removeUnknownOption=function(){c.unknownOption.parent()&&c.unknownOption.remove()};c.readValue=function(){c.removeUnknownOption();return a.val()};c.writeValue=function(b){c.hasOption(b)?(c.removeUnknownOption(),a.val(b),""===b&&c.emptyOption.prop("selected",!0)):null==b&&c.emptyOption?(c.removeUnknownOption(),a.val("")):c.renderUnknownOption(b)};c.addOption=function(a,b){Sa(a,'"option value"');""===a&&(c.emptyOption=b);var d=e.get(a)||0;e.put(a,d+1);c.ngModelCtrl.$render();
b[0].hasAttribute("selected")&&(b[0].selected=!0)};c.removeOption=function(a){var b=e.get(a);b&&(1===b?(e.remove(a),""===a&&(c.emptyOption=u)):e.put(a,b-1))};c.hasOption=function(a){return!!e.get(a)};c.registerOption=function(a,b,d,e,l){if(e){var m;d.$observe("value",function(a){y(m)&&c.removeOption(m);m=a;c.addOption(a,b)})}else l?a.$watch(l,function(a,e){d.$set("value",a);e!==a&&c.removeOption(e);c.addOption(a,b)}):c.addOption(d.value,b);b.on("$destroy",function(){c.removeOption(d.value);c.ngModelCtrl.$render()})}}],
me=function(){return{restrict:"E",require:["select","?ngModel"],controller:Jg,priority:1,link:{pre:function(a,b,d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;e.$render=function(){f.writeValue(e.$viewValue)};b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});if(d.multiple){f.readValue=function(){var a=[];n(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};f.writeValue=function(a){var c=new Ta(a);n(b.find("option"),function(a){a.selected=y(c.get(a.value))})};
var g,h=NaN;a.$watch(function(){h!==e.$viewValue||la(g,e.$viewValue)||(g=da(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}}}}},oe=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){if(y(d.value))var c=a(d.value,!0);else{var e=a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],ne=ca({restrict:"E",
terminal:!1}),Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Fc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){J(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw I("ngPattern")("noregexp",f,a,qa(b));e=a||u;c.$validate()});
c.$validators.pattern=function(a,b){return c.$isEmpty(b)||x(e)||e.test(b)}}}}},Ic=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=ba(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=ba(a)||0;c.$validate()});c.$validators.minlength=
function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};R.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(ee(),ge(ga),ga.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),
SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,
maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",pluralCat:function(a,c){var e=a|0,f=c;u===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),A(X).ready(function(){ae(X,yc)}))})(window,document);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map



/**
 * @license AngularJS v1.4.2
 * (c) 2010-2015 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc module
 * @name ngRoute
 * @description
 *
 * # ngRoute
 *
 * The `ngRoute` module provides routing and deeplinking services and directives for angular apps.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 *
 * <div doc-module-components="ngRoute"></div>
 */
 /* global -ngRouteModule */
var ngRouteModule = angular.module('ngRoute', ['ng']).
                        provider('$route', $RouteProvider),
    $routeMinErr = angular.$$minErr('ngRoute');

/**
 * @ngdoc provider
 * @name $routeProvider
 *
 * @description
 *
 * Used for configuring routes.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 * ## Dependencies
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 */
function $RouteProvider() {
  function inherit(parent, extra) {
    return angular.extend(Object.create(parent), extra);
  }

  var routes = {};

  /**
   * @ngdoc method
   * @name $routeProvider#when
   *
   * @param {string} path Route path (matched against `$location.path`). If `$location.path`
   *    contains redundant trailing slash or is missing one, the route will still match and the
   *    `$location.path` will be updated to add or drop the trailing slash to exactly match the
   *    route definition.
   *
   *    * `path` can contain named groups starting with a colon: e.g. `:name`. All characters up
   *        to the next slash are matched and stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain named groups starting with a colon and ending with a star:
   *        e.g.`:name*`. All characters are eagerly stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain optional named groups with a question mark: e.g.`:name?`.
   *
   *    For example, routes like `/color/:color/largecode/:largecode*\/edit` will match
   *    `/color/brown/largecode/code/with/slashes/edit` and extract:
   *
   *    * `color: brown`
   *    * `largecode: code/with/slashes`.
   *
   *
   * @param {Object} route Mapping information to be assigned to `$route.current` on route
   *    match.
   *
   *    Object properties:
   *
   *    - `controller` â€“ `{(string|function()=}` â€“ Controller fn that should be associated with
   *      newly created scope or the name of a {@link angular.Module#controller registered
   *      controller} if passed as a string.
   *    - `controllerAs` â€“ `{string=}` â€“ An identifier name for a reference to the controller.
   *      If present, the controller will be published to scope under the `controllerAs` name.
   *    - `template` â€“ `{string=|function()=}` â€“ html template as a string or a function that
   *      returns an html template as a string which should be used by {@link
   *      ngRoute.directive:ngView ngView} or {@link ng.directive:ngInclude ngInclude} directives.
   *      This property takes precedence over `templateUrl`.
   *
   *      If `template` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `templateUrl` â€“ `{string=|function()=}` â€“ path or function that returns a path to an html
   *      template that should be used by {@link ngRoute.directive:ngView ngView}.
   *
   *      If `templateUrl` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `resolve` - `{Object.<string, function>=}` - An optional map of dependencies which should
   *      be injected into the controller. If any of these dependencies are promises, the router
   *      will wait for them all to be resolved or one to be rejected before the controller is
   *      instantiated.
   *      If all the promises are resolved successfully, the values of the resolved promises are
   *      injected and {@link ngRoute.$route#$routeChangeSuccess $routeChangeSuccess} event is
   *      fired. If any of the promises are rejected the
   *      {@link ngRoute.$route#$routeChangeError $routeChangeError} event is fired. The map object
   *      is:
   *
   *      - `key` â€“ `{string}`: a name of a dependency to be injected into the controller.
   *      - `factory` - `{string|function}`: If `string` then it is an alias for a service.
   *        Otherwise if function, then it is {@link auto.$injector#invoke injected}
   *        and the return value is treated as the dependency. If the result is a promise, it is
   *        resolved before its value is injected into the controller. Be aware that
   *        `ngRoute.$routeParams` will still refer to the previous route within these resolve
   *        functions.  Use `$route.current.params` to access the new route parameters, instead.
   *
   *    - `redirectTo` â€“ {(string|function())=} â€“ value to update
   *      {@link ng.$location $location} path with and trigger route redirection.
   *
   *      If `redirectTo` is a function, it will be called with the following parameters:
   *
   *      - `{Object.<string>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route templateUrl.
   *      - `{string}` - current `$location.path()`
   *      - `{Object}` - current `$location.search()`
   *
   *      The custom `redirectTo` function is expected to return a string which will be used
   *      to update `$location.path()` and `$location.search()`.
   *
   *    - `[reloadOnSearch=true]` - {boolean=} - reload route when only `$location.search()`
   *      or `$location.hash()` changes.
   *
   *      If the option is set to `false` and url in the browser changes, then
   *      `$routeUpdate` event is broadcasted on the root scope.
   *
   *    - `[caseInsensitiveMatch=false]` - {boolean=} - match routes without being case sensitive
   *
   *      If the option is set to `true`, then the particular route can be matched without being
   *      case sensitive
   *
   * @returns {Object} self
   *
   * @description
   * Adds a new route definition to the `$route` service.
   */
  this.when = function(path, route) {
    //copy original route object to preserve params inherited from proto chain
    var routeCopy = angular.copy(route);
    if (angular.isUndefined(routeCopy.reloadOnSearch)) {
      routeCopy.reloadOnSearch = true;
    }
    if (angular.isUndefined(routeCopy.caseInsensitiveMatch)) {
      routeCopy.caseInsensitiveMatch = this.caseInsensitiveMatch;
    }
    routes[path] = angular.extend(
      routeCopy,
      path && pathRegExp(path, routeCopy)
    );

    // create redirection for trailing slashes
    if (path) {
      var redirectPath = (path[path.length - 1] == '/')
            ? path.substr(0, path.length - 1)
            : path + '/';

      routes[redirectPath] = angular.extend(
        {redirectTo: path},
        pathRegExp(redirectPath, routeCopy)
      );
    }

    return this;
  };

  /**
   * @ngdoc property
   * @name $routeProvider#caseInsensitiveMatch
   * @description
   *
   * A boolean property indicating if routes defined
   * using this provider should be matched using a case insensitive
   * algorithm. Defaults to `false`.
   */
  this.caseInsensitiveMatch = false;

   /**
    * @param path {string} path
    * @param opts {Object} options
    * @return {?Object}
    *
    * @description
    * Normalizes the given path, returning a regular expression
    * and the original path.
    *
    * Inspired by pathRexp in visionmedia/express/lib/utils.js.
    */
  function pathRegExp(path, opts) {
    var insensitive = opts.caseInsensitiveMatch,
        ret = {
          originalPath: path,
          regexp: path
        },
        keys = ret.keys = [];

    path = path
      .replace(/([().])/g, '\\$1')
      .replace(/(\/)?:(\w+)([\?\*])?/g, function(_, slash, key, option) {
        var optional = option === '?' ? option : null;
        var star = option === '*' ? option : null;
        keys.push({ name: key, optional: !!optional });
        slash = slash || '';
        return ''
          + (optional ? '' : slash)
          + '(?:'
          + (optional ? slash : '')
          + (star && '(.+?)' || '([^/]+)')
          + (optional || '')
          + ')'
          + (optional || '');
      })
      .replace(/([\/$\*])/g, '\\$1');

    ret.regexp = new RegExp('^' + path + '$', insensitive ? 'i' : '');
    return ret;
  }

  /**
   * @ngdoc method
   * @name $routeProvider#otherwise
   *
   * @description
   * Sets route definition that will be used on route change when no other route definition
   * is matched.
   *
   * @param {Object|string} params Mapping information to be assigned to `$route.current`.
   * If called with a string, the value maps to `redirectTo`.
   * @returns {Object} self
   */
  this.otherwise = function(params) {
    if (typeof params === 'string') {
      params = {redirectTo: params};
    }
    this.when(null, params);
    return this;
  };


  this.$get = ['$rootScope',
               '$location',
               '$routeParams',
               '$q',
               '$injector',
               '$templateRequest',
               '$sce',
      function($rootScope, $location, $routeParams, $q, $injector, $templateRequest, $sce) {

    /**
     * @ngdoc service
     * @name $route
     * @requires $location
     * @requires $routeParams
     *
     * @property {Object} current Reference to the current route definition.
     * The route definition contains:
     *
     *   - `controller`: The controller constructor as define in route definition.
     *   - `locals`: A map of locals which is used by {@link ng.$controller $controller} service for
     *     controller instantiation. The `locals` contain
     *     the resolved values of the `resolve` map. Additionally the `locals` also contain:
     *
     *     - `$scope` - The current route scope.
     *     - `$template` - The current route template HTML.
     *
     * @property {Object} routes Object with all route configuration Objects as its properties.
     *
     * @description
     * `$route` is used for deep-linking URLs to controllers and views (HTML partials).
     * It watches `$location.url()` and tries to map the path to an existing route definition.
     *
     * Requires the {@link ngRoute `ngRoute`} module to be installed.
     *
     * You can define routes through {@link ngRoute.$routeProvider $routeProvider}'s API.
     *
     * The `$route` service is typically used in conjunction with the
     * {@link ngRoute.directive:ngView `ngView`} directive and the
     * {@link ngRoute.$routeParams `$routeParams`} service.
     *
     * @example
     * This example shows how changing the URL hash causes the `$route` to match a route against the
     * URL, and the `ngView` pulls in the partial.
     *
     * <example name="$route-service" module="ngRouteExample"
     *          deps="angular-route.js" fixBase="true">
     *   <file name="index.html">
     *     <div ng-controller="MainController">
     *       Choose:
     *       <a href="Book/Moby">Moby</a> |
     *       <a href="Book/Moby/ch/1">Moby: Ch1</a> |
     *       <a href="Book/Gatsby">Gatsby</a> |
     *       <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
     *       <a href="Book/Scarlet">Scarlet Letter</a><br/>
     *
     *       <div ng-view></div>
     *
     *       <hr />
     *
     *       <pre>$location.path() = {{$location.path()}}</pre>
     *       <pre>$route.current.templateUrl = {{$route.current.templateUrl}}</pre>
     *       <pre>$route.current.params = {{$route.current.params}}</pre>
     *       <pre>$route.current.scope.name = {{$route.current.scope.name}}</pre>
     *       <pre>$routeParams = {{$routeParams}}</pre>
     *     </div>
     *   </file>
     *
     *   <file name="book.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *   </file>
     *
     *   <file name="chapter.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *     Chapter Id: {{params.chapterId}}
     *   </file>
     *
     *   <file name="script.js">
     *     angular.module('ngRouteExample', ['ngRoute'])
     *
     *      .controller('MainController', function($scope, $route, $routeParams, $location) {
     *          $scope.$route = $route;
     *          $scope.$location = $location;
     *          $scope.$routeParams = $routeParams;
     *      })
     *
     *      .controller('BookController', function($scope, $routeParams) {
     *          $scope.name = "BookController";
     *          $scope.params = $routeParams;
     *      })
     *
     *      .controller('ChapterController', function($scope, $routeParams) {
     *          $scope.name = "ChapterController";
     *          $scope.params = $routeParams;
     *      })
     *
     *     .config(function($routeProvider, $locationProvider) {
     *       $routeProvider
     *        .when('/Book/:bookId', {
     *         templateUrl: 'book.html',
     *         controller: 'BookController',
     *         resolve: {
     *           // I will cause a 1 second delay
     *           delay: function($q, $timeout) {
     *             var delay = $q.defer();
     *             $timeout(delay.resolve, 1000);
     *             return delay.promise;
     *           }
     *         }
     *       })
     *       .when('/Book/:bookId/ch/:chapterId', {
     *         templateUrl: 'chapter.html',
     *         controller: 'ChapterController'
     *       });
     *
     *       // configure html5 to get links working on jsfiddle
     *       $locationProvider.html5Mode(true);
     *     });
     *
     *   </file>
     *
     *   <file name="protractor.js" type="protractor">
     *     it('should load and compile correct template', function() {
     *       element(by.linkText('Moby: Ch1')).click();
     *       var content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: ChapterController/);
     *       expect(content).toMatch(/Book Id\: Moby/);
     *       expect(content).toMatch(/Chapter Id\: 1/);
     *
     *       element(by.partialLinkText('Scarlet')).click();
     *
     *       content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: BookController/);
     *       expect(content).toMatch(/Book Id\: Scarlet/);
     *     });
     *   </file>
     * </example>
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeStart
     * @eventType broadcast on root scope
     * @description
     * Broadcasted before a route change. At this  point the route services starts
     * resolving all of the dependencies needed for the route change to occur.
     * Typically this involves fetching the view template as well as any dependencies
     * defined in `resolve` route property. Once  all of the dependencies are resolved
     * `$routeChangeSuccess` is fired.
     *
     * The route change (and the `$location` change that triggered it) can be prevented
     * by calling `preventDefault` method of the event. See {@link ng.$rootScope.Scope#$on}
     * for more details about event object.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} next Future route information.
     * @param {Route} current Current route information.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeSuccess
     * @eventType broadcast on root scope
     * @description
     * Broadcasted after a route dependencies are resolved.
     * {@link ngRoute.directive:ngView ngView} listens for the directive
     * to instantiate the controller and render the view.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} current Current route information.
     * @param {Route|Undefined} previous Previous route information, or undefined if current is
     * first route entered.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeError
     * @eventType broadcast on root scope
     * @description
     * Broadcasted if any of the resolve promises are rejected.
     *
     * @param {Object} angularEvent Synthetic event object
     * @param {Route} current Current route information.
     * @param {Route} previous Previous route information.
     * @param {Route} rejection Rejection of the promise. Usually the error of the failed promise.
     */

    /**
     * @ngdoc event
     * @name $route#$routeUpdate
     * @eventType broadcast on root scope
     * @description
     * The `reloadOnSearch` property has been set to false, and we are reusing the same
     * instance of the Controller.
     *
     * @param {Object} angularEvent Synthetic event object
     * @param {Route} current Current/previous route information.
     */

    var forceReload = false,
        preparedRoute,
        preparedRouteIsUpdateOnly,
        $route = {
          routes: routes,

          /**
           * @ngdoc method
           * @name $route#reload
           *
           * @description
           * Causes `$route` service to reload the current route even if
           * {@link ng.$location $location} hasn't changed.
           *
           * As a result of that, {@link ngRoute.directive:ngView ngView}
           * creates new scope and reinstantiates the controller.
           */
          reload: function() {
            forceReload = true;
            $rootScope.$evalAsync(function() {
              // Don't support cancellation of a reload for now...
              prepareRoute();
              commitRoute();
            });
          },

          /**
           * @ngdoc method
           * @name $route#updateParams
           *
           * @description
           * Causes `$route` service to update the current URL, replacing
           * current route parameters with those specified in `newParams`.
           * Provided property names that match the route's path segment
           * definitions will be interpolated into the location's path, while
           * remaining properties will be treated as query params.
           *
           * @param {!Object<string, string>} newParams mapping of URL parameter names to values
           */
          updateParams: function(newParams) {
            if (this.current && this.current.$$route) {
              newParams = angular.extend({}, this.current.params, newParams);
              $location.path(interpolate(this.current.$$route.originalPath, newParams));
              // interpolate modifies newParams, only query params are left
              $location.search(newParams);
            } else {
              throw $routeMinErr('norout', 'Tried updating route when with no current route');
            }
          }
        };

    $rootScope.$on('$locationChangeStart', prepareRoute);
    $rootScope.$on('$locationChangeSuccess', commitRoute);

    return $route;

    /////////////////////////////////////////////////////

    /**
     * @param on {string} current url
     * @param route {Object} route regexp to match the url against
     * @return {?Object}
     *
     * @description
     * Check if the route matches the current url.
     *
     * Inspired by match in
     * visionmedia/express/lib/router/router.js.
     */
    function switchRouteMatcher(on, route) {
      var keys = route.keys,
          params = {};

      if (!route.regexp) return null;

      var m = route.regexp.exec(on);
      if (!m) return null;

      for (var i = 1, len = m.length; i < len; ++i) {
        var key = keys[i - 1];

        var val = m[i];

        if (key && val) {
          params[key.name] = val;
        }
      }
      return params;
    }

    function prepareRoute($locationEvent) {
      var lastRoute = $route.current;

      preparedRoute = parseRoute();
      preparedRouteIsUpdateOnly = preparedRoute && lastRoute && preparedRoute.$$route === lastRoute.$$route
          && angular.equals(preparedRoute.pathParams, lastRoute.pathParams)
          && !preparedRoute.reloadOnSearch && !forceReload;

      if (!preparedRouteIsUpdateOnly && (lastRoute || preparedRoute)) {
        if ($rootScope.$broadcast('$routeChangeStart', preparedRoute, lastRoute).defaultPrevented) {
          if ($locationEvent) {
            $locationEvent.preventDefault();
          }
        }
      }
    }

    function commitRoute() {
      var lastRoute = $route.current;
      var nextRoute = preparedRoute;

      if (preparedRouteIsUpdateOnly) {
        lastRoute.params = nextRoute.params;
        angular.copy(lastRoute.params, $routeParams);
        $rootScope.$broadcast('$routeUpdate', lastRoute);
      } else if (nextRoute || lastRoute) {
        forceReload = false;
        $route.current = nextRoute;
        if (nextRoute) {
          if (nextRoute.redirectTo) {
            if (angular.isString(nextRoute.redirectTo)) {
              $location.path(interpolate(nextRoute.redirectTo, nextRoute.params)).search(nextRoute.params)
                       .replace();
            } else {
              $location.url(nextRoute.redirectTo(nextRoute.pathParams, $location.path(), $location.search()))
                       .replace();
            }
          }
        }

        $q.when(nextRoute).
          then(function() {
            if (nextRoute) {
              var locals = angular.extend({}, nextRoute.resolve),
                  template, templateUrl;

              angular.forEach(locals, function(value, key) {
                locals[key] = angular.isString(value) ?
                    $injector.get(value) : $injector.invoke(value, null, null, key);
              });

              if (angular.isDefined(template = nextRoute.template)) {
                if (angular.isFunction(template)) {
                  template = template(nextRoute.params);
                }
              } else if (angular.isDefined(templateUrl = nextRoute.templateUrl)) {
                if (angular.isFunction(templateUrl)) {
                  templateUrl = templateUrl(nextRoute.params);
                }
                if (angular.isDefined(templateUrl)) {
                  nextRoute.loadedTemplateUrl = $sce.valueOf(templateUrl);
                  template = $templateRequest(templateUrl);
                }
              }
              if (angular.isDefined(template)) {
                locals['$template'] = template;
              }
              return $q.all(locals);
            }
          }).
          then(function(locals) {
            // after route change
            if (nextRoute == $route.current) {
              if (nextRoute) {
                nextRoute.locals = locals;
                angular.copy(nextRoute.params, $routeParams);
              }
              $rootScope.$broadcast('$routeChangeSuccess', nextRoute, lastRoute);
            }
          }, function(error) {
            if (nextRoute == $route.current) {
              $rootScope.$broadcast('$routeChangeError', nextRoute, lastRoute, error);
            }
          });
      }
    }


    /**
     * @returns {Object} the current active route, by matching it against the URL
     */
    function parseRoute() {
      // Match a route
      var params, match;
      angular.forEach(routes, function(route, path) {
        if (!match && (params = switchRouteMatcher($location.path(), route))) {
          match = inherit(route, {
            params: angular.extend({}, $location.search(), params),
            pathParams: params});
          match.$$route = route;
        }
      });
      // No route matched; fallback to "otherwise" route
      return match || routes[null] && inherit(routes[null], {params: {}, pathParams:{}});
    }

    /**
     * @returns {string} interpolation of the redirect path with the parameters
     */
    function interpolate(string, params) {
      var result = [];
      angular.forEach((string || '').split(':'), function(segment, i) {
        if (i === 0) {
          result.push(segment);
        } else {
          var segmentMatch = segment.match(/(\w+)(?:[?*])?(.*)/);
          var key = segmentMatch[1];
          result.push(params[key]);
          result.push(segmentMatch[2] || '');
          delete params[key];
        }
      });
      return result.join('');
    }
  }];
}

ngRouteModule.provider('$routeParams', $RouteParamsProvider);


/**
 * @ngdoc service
 * @name $routeParams
 * @requires $route
 *
 * @description
 * The `$routeParams` service allows you to retrieve the current set of route parameters.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * The route parameters are a combination of {@link ng.$location `$location`}'s
 * {@link ng.$location#search `search()`} and {@link ng.$location#path `path()`}.
 * The `path` parameters are extracted when the {@link ngRoute.$route `$route`} path is matched.
 *
 * In case of parameter name collision, `path` params take precedence over `search` params.
 *
 * The service guarantees that the identity of the `$routeParams` object will remain unchanged
 * (but its properties will likely change) even when a route change occurs.
 *
 * Note that the `$routeParams` are only updated *after* a route change completes successfully.
 * This means that you cannot rely on `$routeParams` being correct in route resolve functions.
 * Instead you can use `$route.current.params` to access the new route's parameters.
 *
 * @example
 * ```js
 *  // Given:
 *  // URL: http://server.com/index.html#/Chapter/1/Section/2?search=moby
 *  // Route: /Chapter/:chapterId/Section/:sectionId
 *  //
 *  // Then
 *  $routeParams ==> {chapterId:'1', sectionId:'2', search:'moby'}
 * ```
 */
function $RouteParamsProvider() {
  this.$get = function() { return {}; };
}

ngRouteModule.directive('ngView', ngViewFactory);
ngRouteModule.directive('ngView', ngViewFillContentFactory);


/**
 * @ngdoc directive
 * @name ngView
 * @restrict ECA
 *
 * @description
 * # Overview
 * `ngView` is a directive that complements the {@link ngRoute.$route $route} service by
 * including the rendered template of the current route into the main layout (`index.html`) file.
 * Every time the current route changes, the included view changes with it according to the
 * configuration of the `$route` service.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * @animations
 * enter - animation is used to bring new content into the browser.
 * leave - animation is used to animate existing content away.
 *
 * The enter and leave animation occur concurrently.
 *
 * @scope
 * @priority 400
 * @param {string=} onload Expression to evaluate whenever the view updates.
 *
 * @param {string=} autoscroll Whether `ngView` should call {@link ng.$anchorScroll
 *                  $anchorScroll} to scroll the viewport after the view is updated.
 *
 *                  - If the attribute is not set, disable scrolling.
 *                  - If the attribute is set without value, enable scrolling.
 *                  - Otherwise enable scrolling only if the `autoscroll` attribute value evaluated
 *                    as an expression yields a truthy value.
 * @example
    <example name="ngView-directive" module="ngViewExample"
             deps="angular-route.js;angular-animate.js"
             animations="true" fixBase="true">
      <file name="index.html">
        <div ng-controller="MainCtrl as main">
          Choose:
          <a href="Book/Moby">Moby</a> |
          <a href="Book/Moby/ch/1">Moby: Ch1</a> |
          <a href="Book/Gatsby">Gatsby</a> |
          <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
          <a href="Book/Scarlet">Scarlet Letter</a><br/>

          <div class="view-animate-container">
            <div ng-view class="view-animate"></div>
          </div>
          <hr />

          <pre>$location.path() = {{main.$location.path()}}</pre>
          <pre>$route.current.templateUrl = {{main.$route.current.templateUrl}}</pre>
          <pre>$route.current.params = {{main.$route.current.params}}</pre>
          <pre>$routeParams = {{main.$routeParams}}</pre>
        </div>
      </file>

      <file name="book.html">
        <div>
          controller: {{book.name}}<br />
          Book Id: {{book.params.bookId}}<br />
        </div>
      </file>

      <file name="chapter.html">
        <div>
          controller: {{chapter.name}}<br />
          Book Id: {{chapter.params.bookId}}<br />
          Chapter Id: {{chapter.params.chapterId}}
        </div>
      </file>

      <file name="animations.css">
        .view-animate-container {
          position:relative;
          height:100px!important;
          background:white;
          border:1px solid black;
          height:40px;
          overflow:hidden;
        }

        .view-animate {
          padding:10px;
        }

        .view-animate.ng-enter, .view-animate.ng-leave {
          -webkit-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;
          transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;

          display:block;
          width:100%;
          border-left:1px solid black;

          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          padding:10px;
        }

        .view-animate.ng-enter {
          left:100%;
        }
        .view-animate.ng-enter.ng-enter-active {
          left:0;
        }
        .view-animate.ng-leave.ng-leave-active {
          left:-100%;
        }
      </file>

      <file name="script.js">
        angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])
          .config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
              $routeProvider
                .when('/Book/:bookId', {
                  templateUrl: 'book.html',
                  controller: 'BookCtrl',
                  controllerAs: 'book'
                })
                .when('/Book/:bookId/ch/:chapterId', {
                  templateUrl: 'chapter.html',
                  controller: 'ChapterCtrl',
                  controllerAs: 'chapter'
                });

              $locationProvider.html5Mode(true);
          }])
          .controller('MainCtrl', ['$route', '$routeParams', '$location',
            function($route, $routeParams, $location) {
              this.$route = $route;
              this.$location = $location;
              this.$routeParams = $routeParams;
          }])
          .controller('BookCtrl', ['$routeParams', function($routeParams) {
            this.name = "BookCtrl";
            this.params = $routeParams;
          }])
          .controller('ChapterCtrl', ['$routeParams', function($routeParams) {
            this.name = "ChapterCtrl";
            this.params = $routeParams;
          }]);

      </file>

      <file name="protractor.js" type="protractor">
        it('should load and compile correct template', function() {
          element(by.linkText('Moby: Ch1')).click();
          var content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: ChapterCtrl/);
          expect(content).toMatch(/Book Id\: Moby/);
          expect(content).toMatch(/Chapter Id\: 1/);

          element(by.partialLinkText('Scarlet')).click();

          content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: BookCtrl/);
          expect(content).toMatch(/Book Id\: Scarlet/);
        });
      </file>
    </example>
 */


/**
 * @ngdoc event
 * @name ngView#$viewContentLoaded
 * @eventType emit on the current ngView scope
 * @description
 * Emitted every time the ngView content is reloaded.
 */
ngViewFactory.$inject = ['$route', '$anchorScroll', '$animate'];
function ngViewFactory($route, $anchorScroll, $animate) {
  return {
    restrict: 'ECA',
    terminal: true,
    priority: 400,
    transclude: 'element',
    link: function(scope, $element, attr, ctrl, $transclude) {
        var currentScope,
            currentElement,
            previousLeaveAnimation,
            autoScrollExp = attr.autoscroll,
            onloadExp = attr.onload || '';

        scope.$on('$routeChangeSuccess', update);
        update();

        function cleanupLastView() {
          if (previousLeaveAnimation) {
            $animate.cancel(previousLeaveAnimation);
            previousLeaveAnimation = null;
          }

          if (currentScope) {
            currentScope.$destroy();
            currentScope = null;
          }
          if (currentElement) {
            previousLeaveAnimation = $animate.leave(currentElement);
            previousLeaveAnimation.then(function() {
              previousLeaveAnimation = null;
            });
            currentElement = null;
          }
        }

        function update() {
          var locals = $route.current && $route.current.locals,
              template = locals && locals.$template;

          if (angular.isDefined(template)) {
            var newScope = scope.$new();
            var current = $route.current;

            // Note: This will also link all children of ng-view that were contained in the original
            // html. If that content contains controllers, ... they could pollute/change the scope.
            // However, using ng-view on an element with additional content does not make sense...
            // Note: We can't remove them in the cloneAttchFn of $transclude as that
            // function is called before linking the content, which would apply child
            // directives to non existing elements.
            var clone = $transclude(newScope, function(clone) {
              $animate.enter(clone, null, currentElement || $element).then(function onNgViewEnter() {
                if (angular.isDefined(autoScrollExp)
                  && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                  $anchorScroll();
                }
              });
              cleanupLastView();
            });

            currentElement = clone;
            currentScope = current.scope = newScope;
            currentScope.$emit('$viewContentLoaded');
            currentScope.$eval(onloadExp);
          } else {
            cleanupLastView();
          }
        }
    }
  };
}

// This directive is called during the $transclude call of the first `ngView` directive.
// It will replace and compile the content of the element with the loaded template.
// We need this directive so that the element content is already filled when
// the link function of another directive on the same element as ngView
// is called.
ngViewFillContentFactory.$inject = ['$compile', '$controller', '$route'];
function ngViewFillContentFactory($compile, $controller, $route) {
  return {
    restrict: 'ECA',
    priority: -400,
    link: function(scope, $element) {
      var current = $route.current,
          locals = current.locals;

      $element.html(locals.$template);

      var link = $compile($element.contents());

      if (current.controller) {
        locals.$scope = scope;
        var controller = $controller(current.controller, locals);
        if (current.controllerAs) {
          scope[current.controllerAs] = controller;
        }
        $element.data('$ngControllerController', controller);
        $element.children().data('$ngControllerController', controller);
      }

      link(scope);
    }
  };
}


})(window, window.angular);