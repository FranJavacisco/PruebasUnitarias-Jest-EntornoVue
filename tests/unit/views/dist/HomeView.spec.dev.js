"use strict";

var _testUtils = require("@vue/test-utils");

var _HomeView = _interopRequireDefault(require("@/views/HomeView.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('HomeView.vue', function () {
  it('matches the snapshot', function () {
    var wrapper = (0, _testUtils.shallowMount)(_HomeView["default"]);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
//# sourceMappingURL=HomeView.spec.dev.js.map
