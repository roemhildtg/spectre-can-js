/*spectre-canjs@0.28.0#dropdown-menu/demo/dropdown*/
define("spectre-canjs@0.28.0#dropdown-menu/demo/dropdown",["can-stache","can-define/map/map","spectre-canjs/dropdown-menu/dropdown-menu"],function(e,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var t=a(e),r=a(n),o=t.default.from("demo-html"),d=new r.default({pages:[{label:"List"},{label:"Create",active:!0},{label:"Other Options"}],primary:[{text:"Important!"}]});document.body.appendChild(o(d)),window.DEMO_SOURCE="\n import 'spectre-canjs/dropdown-menu/dropdown-menu';\n import stache from 'can-stache';\n import DefineMap from 'can-define/map/map';\n\n var render = stache.from('demo-html');\n\n var viewModel = new DefineMap({\n     pages: [{\n         label: 'List'\n     }, {\n         label: 'Create',\n         active: true\n     }, {\n         label: 'Other Options'\n     }],\n     primary: [{\n       text: 'Important!'\n     }]\n });\n\n document.body.appendChild(render(viewModel));\n "});
//# sourceMappingURL=dropdown.js.map