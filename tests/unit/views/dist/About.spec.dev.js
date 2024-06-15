"use strict";

var _testUtils = require("@vue/test-utils");

var _About = _interopRequireDefault(require("@/views/About.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('About.vue', function () {
  it('matches the snapshot', function () {
    var wrapper = (0, _testUtils.shallowMount)(_About["default"]);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
//# sourceMappingURL=About.spec.dev.js.map
