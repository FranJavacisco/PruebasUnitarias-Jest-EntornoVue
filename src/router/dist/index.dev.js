"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _HomeView = _interopRequireDefault(require("../views/HomeView.vue"));

var _About = _interopRequireDefault(require("../views/About.vue"));

var _Contact = _interopRequireDefault(require("../views/Contact.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'home',
  component: _HomeView["default"]
}, {
  path: '/about',
  name: 'about',
  component: _About["default"]
}, {
  path: '/contact',
  name: 'contact',
  component: _Contact["default"]
}];
var router = new _vueRouter["default"]({
  routes: routes
});
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.dev.js.map
