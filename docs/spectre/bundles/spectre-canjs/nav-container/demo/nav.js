define("spectre-canjs@0.29.2#nav-container/nav-container.stache!steal-stache@3.0.7#steal-stache",["module","can-stache","can-stache/src/mustache_core","can-view-import@3.0.7#can-view-import","can-stache-bindings@3.1.5#can-stache-bindings"],function(e,t,a){var n=t([{tokenType:"start",args:["ul",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["tab"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["ul",!1]},{tokenType:"special",args:["#each pages"]},{tokenType:"chars",args:["\r\n      "]},{tokenType:"start",args:["li",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["tab-item "]},{tokenType:"special",args:["#is . ../activePage"]},{tokenType:"attrValue",args:["active"]},{tokenType:"special",args:["/is"]},{tokenType:"special",args:["#if loading"]},{tokenType:"attrValue",args:[" loading"]},{tokenType:"special",args:["/if"]},{tokenType:"attrValue",args:[" "]},{tokenType:"special",args:["classes"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"attrStart",args:["($click)"]},{tokenType:"attrValue",args:["makeActive(.)"]},{tokenType:"attrEnd",args:["($click)"]},{tokenType:"end",args:["li",!1]},{tokenType:"chars",args:["\r\n          "]},{tokenType:"start",args:["a",!1]},{tokenType:"special",args:["#if href"]},{tokenType:"attrStart",args:["href"]},{tokenType:"special",args:["href"]},{tokenType:"attrEnd",args:["href"]},{tokenType:"special",args:["/if"]},{tokenType:"end",args:["a",!1]},{tokenType:"chars",args:["              "]},{tokenType:"special",args:["label"]},{tokenType:"chars",args:["\r\n          "]},{tokenType:"close",args:["a"]},{tokenType:"chars",args:["\r\n      "]},{tokenType:"close",args:["li"]},{tokenType:"special",args:["/each"]},{tokenType:"chars",args:["\r\n"]},{tokenType:"close",args:["ul"]},{tokenType:"chars",args:["\r\n"]},{tokenType:"start",args:["content",!0]},{tokenType:"end",args:["content",!0]},{tokenType:"chars",args:["\r\n"]},{tokenType:"done",args:[]}]);return function(t,r,s){var o={module:e};return r instanceof a.Options||(r=new a.Options(r||{})),n(t,r.add(o),s)}}),define("spectre-canjs@0.29.2#nav-page/ViewModel",["exports","can-define/map/map"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(e){return e&&e.__esModule?e:{default:e}}(t),n=0,r=a.default.extend("NavPage",{active:{type:"boolean",value:!1},classes:"string",label:"string",loading:{type:"htmlbool",value:!1},pageId:{value:function(){return"page-"+n++}},parent:"*"});e.default=r}),define("spectre-canjs@0.29.2#nav-page/PageList",["exports","can-define/list/list","./ViewModel"],function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(t),s=n(a),o=r.default.extend("NavPageList",{"#":s.default});e.default=o}),define("spectre-canjs@0.29.2#nav-container/ViewModel",["exports","can-define/map/map","../nav-page/PageList"],function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(t),s=n(a),o=r.default.extend("NavContainer",{pages:{Value:s.default},activePage:{get:function(){var e=this,t=void 0;return this.pages.length?(t=this.pages.filter(function(t){return t.pageId===e.activeId}),t=t.length?t[0]:this.pages[0]):null}},activeId:"string",addPage:function(e){this.pages.push(e)},removePage:function(e){var t=this.pages;t.splice(t.indexOf(e),1),e===this.active&&(t.length?this.activeId=t[0].pageId:this.activeId=null)},makeActive:function(e){e!==this.activePage&&(this.activeId=e.pageId)},isActive:function(e){return!!e&&e===this.activePage}});e.default=o}),define("spectre-canjs@0.29.2#nav-container/nav-container",["exports","can-component","./nav-container.stache!","./ViewModel","./nav-container.less!"],function(e,t,a,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var s=r(t),o=r(a),c=r(n);e.default=s.default.extend({tag:"nav-container",ViewModel:c.default,view:o.default,leakScope:!0})}),define("can-param@1.0.1#can-param",function(e,t,a){function n(e,t,a){if(Array.isArray(t))for(var r=0,s=t.length;r<s;++r)a(e+"[]",t[r]);else if(t&&"object"==typeof t)for(var o in t)n(e+"["+o+"]",t[o],a);else a(e,t)}var r=e("can-namespace");a.exports=r.param=function(e){var t=[],a=function(e,a){t.push(encodeURIComponent(e)+"="+encodeURIComponent(a))};for(var r in e)n(r,e[r],a);return t.join("&").replace(/%20/g,"+")}}),define("can-util@3.8.1#dom/ajax/ajax",function(e,t,a){!function(t){"use strict";var n=e("../../js/global/global"),r=e("../../js/assign/assign"),s=e("can-namespace"),o=e("../../js/parse-uri/parse-uri"),c=e("can-param"),i=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Microsoft.XMLHTTP")},function(){return new ActiveXObject("MSXML2.XMLHTTP.3.0")},function(){return new ActiveXObject("MSXML2.XMLHTTP")}],p=null,l=o(n().location.href),u=function(){if(null!=p)return p();for(var e=0,t=i.length;e<t;e++)try{var a=i[e],n=a();if(null!=n)return p=a,n}catch(e){continue}return function(){}},d=function(e,t){switch(t.dataType||e.getResponseHeader("Content-Type").split(";")[0]){case"text/xml":case"xml":return e.responseXML;case"text/json":case"application/json":case"text/javascript":case"application/javascript":case"application/x-javascript":case"json":return JSON.parse(e.responseText);default:return e.responseText}};a.exports=s.ajax=function(e){var t,a,n=u(),s=0,i={},p=new Promise(function(e,t){i.resolve=e,i.reject=t});if(p.abort=function(){n.abort()},e=r({userAgent:"XMLHttpRequest",lang:"en",type:"GET",data:null,dataType:"json"},e),null==e.crossDomain)try{a=o(e.url),e.crossDomain=!!(a.protocol&&a.protocol!==l.protocol||a.host&&a.host!==l.host)}catch(t){e.crossDomain=!0}e.timeout&&(t=setTimeout(function(){n.abort(),e.timeoutFn&&e.timeoutFn(e.url)},e.timeout)),n.onreadystatechange=function(){try{4===n.readyState?(t&&clearTimeout(t),n.status<300?e.success&&e.success(d(n,e)):e.error&&e.error(n,n.status,n.statusText),e.complete&&e.complete(n,n.statusText),n.status>=200&&n.status<300?i.resolve(d(n,e)):i.reject(n)):e.progress&&e.progress(++s)}catch(e){i.reject(e)}};var f=e.url,g=null,v=e.type.toUpperCase(),y="POST"===v||"PUT"===v;!y&&e.data&&(f+="?"+c(e.data)),n.open(v,f);var T=e.crossDomain&&-1!==["GET","POST","HEAD"].indexOf(v);if(y){var h=e.dataType.indexOf("json")>=0;g=h&&!T?"object"==typeof e.data?JSON.stringify(e.data):e.data:c(e.data),n.setRequestHeader("Content-Type",h&&!T?"application/json":"application/x-www-form-urlencoded")}return T||n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.send(g),p}}()}),define("spectre-canjs@0.29.2#nav-container/demo/nav",["can-stache","can-define/map/map","can-util/dom/ajax/ajax","spectre-canjs/nav-container/nav-container"],function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=n(e),s=n(t),o=n(a),c=(0,r.default)(document.getElementById("demo-html").innerHTML),i=new s.default({people:(0,o.default)({url:"http://jsonplaceholder.typicode.com/users"}),pages:[{label:"List"},{label:"Create",active:!0},{label:"Other Options"}]});document.body.appendChild(c(i)),window.DEMO_SOURCE="\n\nimport 'spectre-canjs/nav-container/nav-container';\nimport stache from 'can-stache';\nimport DefineMap from 'can-define/map/map';\nimport ajax from 'can-util/dom/ajax/ajax';\n\nvar render = stache(document.getElementById('demo-html').innerHTML);\n\nvar viewModel = new DefineMap({\n    people: ajax({\n        url: 'http://jsonplaceholder.typicode.com/users'\n    }),\n    pages: [{\n        label: 'List'\n    }, {\n        label: 'Create',\n        active: true\n    }, {\n        label: 'Other Options'\n    }]\n});\n\ndocument.body.appendChild(render(viewModel));\n"});
//# sourceMappingURL=../../../../../../nav-container/nav-container.stache
//# sourceMappingURL=nav.js.map