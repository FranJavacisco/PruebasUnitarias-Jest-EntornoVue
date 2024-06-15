"use strict";

var _testUtils = require("@vue/test-utils");

var _AboutView = _interopRequireDefault(require("@/views/AboutView.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('AboutView.vue', function () {
  it('matches the snapshot', function () {
    var wrapper = (0, _testUtils.shallowMount)(_AboutView["default"]);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
//# sourceMappingURL=AboutView.spec.dev.js.map
